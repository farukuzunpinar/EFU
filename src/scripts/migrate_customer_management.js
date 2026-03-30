require('dotenv').config();
const pool = require('../config/db');

async function ensureSeedData() {
  const [[projectCount]] = await pool.execute('SELECT COUNT(*) AS total FROM projects');
  if (Number(projectCount.total || 0) > 0) {
    return;
  }

  const [insertProjectResult] = await pool.execute(
    'INSERT INTO projects (name) VALUES (?), (?), (?)',
    ['Mef City Panorama', 'Mef City Vadi', 'Mef City Konaklari']
  );

  const firstProjectId = insertProjectResult.insertId;
  const projectIds = [firstProjectId, firstProjectId + 1, firstProjectId + 2];

  const unitRows = [
    [projectIds[0], 'A-101'],
    [projectIds[0], 'A-102'],
    [projectIds[0], 'B-201'],
    [projectIds[1], 'C-01'],
    [projectIds[1], 'C-02'],
    [projectIds[1], 'D-11'],
    [projectIds[2], 'Villa-1'],
    [projectIds[2], 'Villa-2']
  ];

  for (const [projectId, label] of unitRows) {
    await pool.execute(
      'INSERT INTO units (project_id, label, sale_status) VALUES (?, ?, ?)',
      [projectId, label, 'available']
    );
  }
}

async function migrate() {
  try {
    await pool.execute(
      `CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`
    );

    await pool.execute(
      `CREATE TABLE IF NOT EXISTS units (
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_id INT NOT NULL,
        label VARCHAR(80) NOT NULL,
        sale_status VARCHAR(20) NOT NULL DEFAULT 'available',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_units_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
        UNIQUE KEY uq_units_project_label (project_id, label)
      )`
    );

    await pool.execute(
      `CREATE TABLE IF NOT EXISTS customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        identity_number CHAR(11) NOT NULL,
        birth_date DATE NOT NULL,
        occupation VARCHAR(120) NOT NULL,
        phone_primary VARCHAR(30) NOT NULL,
        phone_secondary VARCHAR(30) NULL,
        email VARCHAR(191) NOT NULL,
        address TEXT NOT NULL,
        detail_description TEXT NULL,
        reference_name VARCHAR(120) NULL,
        referral_source VARCHAR(120) NULL,
        customer_type VARCHAR(20) NOT NULL,
        project_id INT NULL,
        unit_id INT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_customers_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE SET NULL,
        CONSTRAINT fk_customers_unit FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE SET NULL,
        UNIQUE KEY uq_customers_full_name (first_name, last_name),
        UNIQUE KEY uq_customers_identity_number (identity_number),
        UNIQUE KEY uq_customers_phone_primary (phone_primary),
        UNIQUE KEY uq_customers_phone_secondary (phone_secondary),
        UNIQUE KEY uq_customers_email (email),
        UNIQUE KEY uq_customers_unit_id (unit_id)
      )`
    );

    await ensureSeedData();

    console.log('customer management migration completed');
  } catch (error) {
    console.error('customer management migration failed:', error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

migrate();