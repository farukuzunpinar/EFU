const pool = require('../config/db');

function buildCustomerSelect() {
  return `SELECT
    c.id,
    c.first_name AS firstName,
    c.last_name AS lastName,
    c.identity_number AS identityNumber,
    c.birth_date AS birthDate,
    c.occupation,
    c.phone_primary AS phonePrimary,
    c.phone_secondary AS phoneSecondary,
    c.email,
    c.address,
    c.detail_description AS detailDescription,
    c.reference_name AS referenceName,
    c.referral_source AS referralSource,
    c.customer_type AS customerType,
    c.project_id AS projectId,
    p.name AS projectName,
    c.unit_id AS unitId,
    u.label AS unitLabel,
    u.sale_status AS unitStatus,
    c.created_at AS createdAt,
    c.updated_at AS updatedAt
  FROM customers c
  LEFT JOIN projects p ON p.id = c.project_id
  LEFT JOIN units u ON u.id = c.unit_id`;
}

async function listCustomers() {
  const [rows] = await pool.execute(
    `${buildCustomerSelect()}
     ORDER BY c.id DESC`
  );

  return rows;
}

async function getCustomerSummary() {
  const [[counts]] = await pool.execute(
    `SELECT
      COUNT(*) AS totalCustomers,
      SUM(CASE WHEN customer_type = 'project' THEN 1 ELSE 0 END) AS projectCustomers,
      SUM(CASE WHEN customer_type = 'housing' THEN 1 ELSE 0 END) AS housingCustomers
     FROM customers`
  );

  const [[soldUnits]] = await pool.execute(
    `SELECT
      SUM(CASE WHEN sale_status = 'sold' THEN 1 ELSE 0 END) AS soldUnits,
      SUM(CASE WHEN sale_status = 'optioned' THEN 1 ELSE 0 END) AS optionedUnits
     FROM units
    `
  );

  const [latestRows] = await pool.execute(
    `${buildCustomerSelect()}
     ORDER BY c.id DESC
     LIMIT 1`
  );

  return {
    totalCustomers: Number(counts.totalCustomers || 0),
    projectCustomers: Number(counts.projectCustomers || 0),
    housingCustomers: Number(counts.housingCustomers || 0),
    soldUnits: Number(soldUnits.soldUnits || 0),
    optionedUnits: Number(soldUnits.optionedUnits || 0),
    latestCustomer: latestRows[0] || null
  };
}

async function listInventory() {
  const [projects] = await pool.execute(
    `SELECT
      p.id,
      p.name,
      COUNT(u.id) AS totalUnits,
      SUM(CASE WHEN u.sale_status = 'available' THEN 1 ELSE 0 END) AS availableUnits,
      SUM(CASE WHEN u.sale_status = 'sold' THEN 1 ELSE 0 END) AS soldUnits,
      SUM(CASE WHEN u.sale_status = 'optioned' THEN 1 ELSE 0 END) AS optionedUnits
     FROM projects p
     LEFT JOIN units u ON u.project_id = p.id
     GROUP BY p.id, p.name
     ORDER BY p.name ASC`
  );

  const [units] = await pool.execute(
    `SELECT
      u.id,
      u.project_id AS projectId,
      u.label,
      u.sale_status AS saleStatus,
      c.id AS customerId,
      c.first_name AS customerFirstName,
      c.last_name AS customerLastName
     FROM units u
     LEFT JOIN customers c ON c.unit_id = u.id
     ORDER BY u.project_id ASC, u.label ASC`
  );

  return {
    projects: projects.map((project) => ({
      ...project,
      totalUnits: Number(project.totalUnits || 0),
      availableUnits: Number(project.availableUnits || 0),
      soldUnits: Number(project.soldUnits || 0),
      optionedUnits: Number(project.optionedUnits || 0)
    })),
    units
  };
}

async function getCustomerById(connection, customerId) {
  const executor = connection || pool;
  const [rows] = await executor.execute(
    `${buildCustomerSelect()}
     WHERE c.id = ?
     LIMIT 1`,
    [customerId]
  );

  return rows[0] || null;
}

async function findCustomerDuplicates(payload, excludeCustomerId = null) {
  const conditions = [];
  const params = [];

  if (payload.firstName && payload.lastName) {
    conditions.push('(c.first_name = ? AND c.last_name = ?)');
    params.push(payload.firstName, payload.lastName);
  }

  if (payload.identityNumber) {
    conditions.push('c.identity_number = ?');
    params.push(payload.identityNumber);
  }

  if (payload.email) {
    conditions.push('c.email = ?');
    params.push(payload.email);
  }

  if (payload.phonePrimary) {
    conditions.push('(c.phone_primary = ? OR c.phone_secondary = ?)');
    params.push(payload.phonePrimary, payload.phonePrimary);
  }

  if (payload.phoneSecondary) {
    conditions.push('(c.phone_primary = ? OR c.phone_secondary = ?)');
    params.push(payload.phoneSecondary, payload.phoneSecondary);
  }

  if (!conditions.length) {
    return [];
  }

  let sql = `SELECT
    c.id,
    c.first_name AS firstName,
    c.last_name AS lastName,
    c.identity_number AS identityNumber,
    c.email,
    c.phone_primary AS phonePrimary,
    c.phone_secondary AS phoneSecondary
  FROM customers c
  WHERE (${conditions.join(' OR ')})`;

  if (excludeCustomerId) {
    sql += ' AND c.id <> ?';
    params.push(excludeCustomerId);
  }

  sql += ' LIMIT 20';

  const [rows] = await pool.execute(sql, params);
  return rows;
}

async function getProjectById(connection, projectId) {
  const executor = connection || pool;
  const [rows] = await executor.execute(
    'SELECT id, name FROM projects WHERE id = ? LIMIT 1',
    [projectId]
  );

  return rows[0] || null;
}

async function getUnitAssignmentState(connection, unitId) {
  const [rows] = await connection.execute(
    `SELECT
      u.id,
      u.project_id AS projectId,
      u.label,
      u.sale_status AS saleStatus,
      c.id AS customerId
     FROM units u
     LEFT JOIN customers c ON c.unit_id = u.id
     WHERE u.id = ?
     LIMIT 1`,
    [unitId]
  );

  return rows[0] || null;
}

async function setUnitStatus(connection, unitId, saleStatus) {
  if (!unitId) {
    return;
  }

  await connection.execute(
    'UPDATE units SET sale_status = ? WHERE id = ?',
    [saleStatus, unitId]
  );
}

async function validateAssignment(connection, payload, currentCustomerId) {
  if (!payload.projectId && payload.unitId) {
    throw new Error('project selection is required before unit selection');
  }

  if (payload.projectId) {
    const project = await getProjectById(connection, payload.projectId);
    if (!project) {
      throw new Error('selected project was not found');
    }
  }

  if (!payload.unitId) {
    return;
  }

  const unit = await getUnitAssignmentState(connection, payload.unitId);
  if (!unit) {
    throw new Error('selected unit was not found');
  }

  if (payload.projectId && unit.projectId !== payload.projectId) {
    throw new Error('selected unit does not belong to selected project');
  }

  if (unit.customerId && unit.customerId !== currentCustomerId) {
    throw new Error('selected unit is already assigned');
  }
}

function toInsertValues(payload) {
  return [
    payload.firstName,
    payload.lastName,
    payload.identityNumber,
    payload.birthDate,
    payload.occupation,
    payload.phonePrimary,
    payload.phoneSecondary || null,
    payload.email,
    payload.address,
    payload.detailDescription || null,
    payload.referenceName || null,
    payload.referralSource || null,
    payload.customerType,
    payload.projectId || null,
    payload.unitId || null
  ];
}

async function createCustomer(payload) {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    await validateAssignment(connection, payload, null);

    const [result] = await connection.execute(
      `INSERT INTO customers (
        first_name,
        last_name,
        identity_number,
        birth_date,
        occupation,
        phone_primary,
        phone_secondary,
        email,
        address,
        detail_description,
        reference_name,
        referral_source,
        customer_type,
        project_id,
        unit_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      toInsertValues(payload)
    );

    if (payload.unitId) {
      await setUnitStatus(connection, payload.unitId, payload.assignmentStatus || 'sold');
    }

    const customer = await getCustomerById(connection, result.insertId);

    await connection.commit();
    return customer;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

async function updateCustomer(customerId, payload) {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const existingCustomer = await getCustomerById(connection, customerId);
    if (!existingCustomer) {
      await connection.rollback();
      return null;
    }

    await validateAssignment(connection, payload, customerId);

    await connection.execute(
      `UPDATE customers
       SET first_name = ?,
           last_name = ?,
           identity_number = ?,
           birth_date = ?,
           occupation = ?,
           phone_primary = ?,
           phone_secondary = ?,
           email = ?,
           address = ?,
           detail_description = ?,
           reference_name = ?,
           referral_source = ?,
           customer_type = ?,
           project_id = ?,
           unit_id = ?
       WHERE id = ?`,
      [...toInsertValues(payload), customerId]
    );

    if (existingCustomer.unitId && existingCustomer.unitId !== payload.unitId) {
      await setUnitStatus(connection, existingCustomer.unitId, 'available');
    }

    if (payload.unitId) {
      await setUnitStatus(connection, payload.unitId, payload.assignmentStatus || 'sold');
    }

    const updatedCustomer = await getCustomerById(connection, customerId);

    await connection.commit();
    return updatedCustomer;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

async function deleteCustomer(customerId) {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const customer = await getCustomerById(connection, customerId);
    if (!customer) {
      await connection.rollback();
      return false;
    }

    if (customer.unitId) {
      await setUnitStatus(connection, customer.unitId, 'available');
    }

    await connection.execute(
      'DELETE FROM customers WHERE id = ?',
      [customerId]
    );

    await connection.commit();
    return true;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  listCustomers,
  getCustomerSummary,
  listInventory,
  findCustomerDuplicates,
  createCustomer,
  updateCustomer,
  deleteCustomer
};