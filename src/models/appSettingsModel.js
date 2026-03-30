const pool = require('../config/db');

let ensureSettingsTablePromise = null;

function ensureSettingsTable() {
  if (!ensureSettingsTablePromise) {
    ensureSettingsTablePromise = pool.execute(
      `CREATE TABLE IF NOT EXISTS app_settings (
        key_name VARCHAR(120) PRIMARY KEY,
        value_text TEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )`
    );
  }

  return ensureSettingsTablePromise;
}

async function getJsonSetting(keyName) {
  await ensureSettingsTable();
  const [rows] = await pool.execute(
    'SELECT value_text FROM app_settings WHERE key_name = ? LIMIT 1',
    [keyName]
  );

  if (!rows[0] || !rows[0].value_text) {
    return null;
  }

  try {
    return JSON.parse(rows[0].value_text);
  } catch (error) {
    return null;
  }
}

async function upsertJsonSetting(keyName, value) {
  await ensureSettingsTable();
  const valueText = JSON.stringify(value || {});

  await pool.execute(
    `INSERT INTO app_settings (key_name, value_text)
     VALUES (?, ?)
     ON DUPLICATE KEY UPDATE
       value_text = VALUES(value_text),
       updated_at = CURRENT_TIMESTAMP`,
    [keyName, valueText]
  );
}

async function getSmtpSettings() {
  return getJsonSetting('smtp');
}

async function upsertSmtpSettings(settings) {
  await upsertJsonSetting('smtp', settings);
}

async function getNotificationsSettings() {
  return getJsonSetting('notifications');
}

async function upsertNotificationsSettings(settings) {
  await upsertJsonSetting('notifications', settings);
}

async function getLogsSettings() {
  return getJsonSetting('logs');
}

async function upsertLogsSettings(settings) {
  await upsertJsonSetting('logs', settings);
}

async function getSecuritySettings() {
  return getJsonSetting('security');
}

async function upsertSecuritySettings(settings) {
  await upsertJsonSetting('security', settings);
}

async function getCustomerReferralSourcesSettings() {
  return getJsonSetting('customer_referral_sources');
}

async function upsertCustomerReferralSourcesSettings(settings) {
  await upsertJsonSetting('customer_referral_sources', settings);
}

module.exports = {
  getSmtpSettings,
  upsertSmtpSettings,
  getNotificationsSettings,
  upsertNotificationsSettings,
  getLogsSettings,
  upsertLogsSettings,
  getSecuritySettings,
  upsertSecuritySettings,
  getCustomerReferralSourcesSettings,
  upsertCustomerReferralSourcesSettings
};
