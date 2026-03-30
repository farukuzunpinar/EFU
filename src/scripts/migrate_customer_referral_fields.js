require('dotenv').config();
const pool = require('../config/db');

async function hasColumn(columnName) {
  const [rows] = await pool.execute(
    `SELECT COUNT(*) AS total
     FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE()
       AND TABLE_NAME = 'customers'
       AND COLUMN_NAME = ?`,
    [columnName]
  );

  return Number(rows[0] && rows[0].total ? rows[0].total : 0) > 0;
}

async function migrate() {
  try {
    const hasReferenceName = await hasColumn('reference_name');
    if (!hasReferenceName) {
      await pool.execute('ALTER TABLE customers ADD COLUMN reference_name VARCHAR(120) NULL AFTER detail_description');
      console.log('added customers.reference_name');
    } else {
      console.log('customers.reference_name already exists');
    }

    const hasReferralSource = await hasColumn('referral_source');
    if (!hasReferralSource) {
      await pool.execute('ALTER TABLE customers ADD COLUMN referral_source VARCHAR(120) NULL AFTER reference_name');
      console.log('added customers.referral_source');
    } else {
      console.log('customers.referral_source already exists');
    }

    console.log('customer referral fields migration completed');
  } catch (error) {
    console.error('customer referral fields migration failed:', error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

migrate();
