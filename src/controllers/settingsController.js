const {
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
} = require('../models/appSettingsModel');
const { listAuditLogs, countAuditLogs, writeAuditLog } = require('../models/auditLogModel');

function actorFromReq(req) {
  return {
    userId: req.user && req.user.userId ? req.user.userId : null,
    userEmail: req.user && req.user.email ? req.user.email : 'sistem'
  };
}

function sanitizeSmtpForClient(settings) {
  const smtp = settings || {};
  return {
    host: smtp.host || '',
    port: Number(smtp.port || 587),
    user: smtp.user || '',
    from: smtp.from || '',
    useSecure: Boolean(smtp.useSecure),
    hasPassword: Boolean(smtp.pass)
  };
}

async function getSmtpSettingsConfig(req, res) {
  try {
    const settings = await getSmtpSettings();
    return res.status(200).json({
      message: 'SMTP ayarları hazır',
      smtp: sanitizeSmtpForClient(settings)
    });
  } catch (error) {
    return res.status(500).json({ message: 'SMTP ayarları alınamadı', error: error.message });
  }
}

async function updateSmtpSettingsConfig(req, res) {
  try {
    const body = req.body || {};
    const host = String(body.host || '').trim();
    const user = String(body.user || '').trim();
    const from = String(body.from || '').trim();
    const pass = String(body.pass || '').trim();
    const useSecure = Boolean(body.useSecure);
    const port = Number(body.port);

    if (!host || !user || !from || !Number.isFinite(port) || port <= 0) {
      return res.status(400).json({ message: 'Host, port, kullanıcı ve gönderen email alanları zorunludur' });
    }

    const existing = (await getSmtpSettings()) || {};
    const merged = {
      host,
      port,
      user,
      from,
      useSecure,
      pass: pass || existing.pass || ''
    };

    await upsertSmtpSettings(merged);
    const actor = actorFromReq(req);
    writeAuditLog({ ...actor, action: 'update', entity: 'settings_smtp', entityId: null, detail: `${host}:${port}` }).catch(() => {});

    return res.status(200).json({
      message: 'SMTP ayarları kaydedildi',
      smtp: sanitizeSmtpForClient(merged)
    });
  } catch (error) {
    return res.status(500).json({ message: 'SMTP ayarları kaydedilemedi', error: error.message });
  }
}

async function getAuditLogsConfig(req, res) {
  try {
    const limit  = Math.min(Math.max(Number(req.query.limit  || 25), 1), 200);
    const offset = Math.max(Number(req.query.offset || 0), 0);
    const entity = typeof req.query.entity === 'string' ? req.query.entity.trim() : '';
    const action = typeof req.query.action === 'string' ? req.query.action.trim() : '';

    const [logs, total] = await Promise.all([
      listAuditLogs({ limit, offset, entity, action }),
      countAuditLogs({ entity, action })
    ]);

    return res.status(200).json({ message: 'Audit loglar hazır', logs, total, limit, offset });
  } catch (error) {
    return res.status(500).json({ message: 'Audit loglar alınamadı', error: error.message });
  }
}

function normalizeReferralSourceList(raw) {
  const fallback = ['Sosyal medya', 'Google', 'YouTube', 'Diger'];
  const items = Array.isArray(raw)
    ? raw
    : Array.isArray(raw && raw.items)
      ? raw.items
      : fallback;

  const dedup = [];
  const seen = new Set();
  for (const item of items) {
    const name = String(item || '').trim();
    if (!name) {
      continue;
    }
    const normalized = name.toLowerCase();
    if (seen.has(normalized)) {
      continue;
    }
    seen.add(normalized);
    dedup.push(name.slice(0, 80));
  }

  return dedup.length ? dedup : fallback;
}

async function getCustomerReferralSourcesConfig(req, res) {
  try {
    const settings = await getCustomerReferralSourcesSettings();
    const references = normalizeReferralSourceList(settings);
    return res.status(200).json({ message: 'Referans kaynakları hazır', references });
  } catch (error) {
    return res.status(500).json({ message: 'Referans kaynakları alınamadı', error: error.message });
  }
}

async function updateCustomerReferralSourcesConfig(req, res) {
  try {
    const body = req.body || {};
    if (!Array.isArray(body.references)) {
      return res.status(400).json({ message: 'Referans listesi gecersiz' });
    }

    const references = normalizeReferralSourceList(body.references);
    await upsertCustomerReferralSourcesSettings({ items: references });

    const actor = actorFromReq(req);
    writeAuditLog({ ...actor, action: 'update', entity: 'settings_references', entityId: null, detail: `count:${references.length}` }).catch(() => {});

    return res.status(200).json({ message: 'Referans kaynakları kaydedildi', references });
  } catch (error) {
    return res.status(500).json({ message: 'Referans kaynakları kaydedilemedi', error: error.message });
  }
}

module.exports = {
  getSmtpSettingsConfig,
  updateSmtpSettingsConfig,
  getNotificationsConfig,
  updateNotificationsConfig,
  getLogsConfig,
  updateLogsConfig,
  getSecurityConfig,
  updateSecurityConfig,
  getAuditLogsConfig,
  getCustomerReferralSourcesConfig,
  updateCustomerReferralSourcesConfig
};

/* ── Notifications ── */

function defaultNotifications(s) {
  const n = s || {};
  return {
    recipientEmail: String(n.recipientEmail || ''),
    onNewTicket: n.onNewTicket !== false,
    onCloseTicket: Boolean(n.onCloseTicket),
    onNewCustomer: Boolean(n.onNewCustomer)
  };
}

async function getNotificationsConfig(req, res) {
  try {
    const settings = await getNotificationsSettings();
    return res.status(200).json({ message: 'Bildirim ayarları hazır', notifications: defaultNotifications(settings) });
  } catch (error) {
    return res.status(500).json({ message: 'Bildirim ayarları alınamadı', error: error.message });
  }
}

async function updateNotificationsConfig(req, res) {
  try {
    const body = req.body || {};
    const recipientEmail = String(body.recipientEmail || '').trim();
    if (recipientEmail && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(recipientEmail)) {
      return res.status(400).json({ message: 'Geçersiz e-posta adresi' });
    }
    const merged = {
      recipientEmail,
      onNewTicket: Boolean(body.onNewTicket),
      onCloseTicket: Boolean(body.onCloseTicket),
      onNewCustomer: Boolean(body.onNewCustomer)
    };
    await upsertNotificationsSettings(merged);
    const actor = actorFromReq(req);
    writeAuditLog({ ...actor, action: 'update', entity: 'settings_notifications', entityId: null, detail: recipientEmail || '-' }).catch(() => {});
    return res.status(200).json({ message: 'Bildirim ayarları kaydedildi', notifications: merged });
  } catch (error) {
    return res.status(500).json({ message: 'Bildirim ayarları kaydedilemedi', error: error.message });
  }
}

/* ── Logs ── */

const VALID_LOG_LEVELS = ['error', 'warn', 'info', 'debug'];
const VALID_RETENTION_DAYS = [7, 30, 90, 180];

function defaultLogs(s) {
  const l = s || {};
  return {
    level: VALID_LOG_LEVELS.includes(l.level) ? l.level : 'info',
    retentionDays: VALID_RETENTION_DAYS.includes(Number(l.retentionDays)) ? Number(l.retentionDays) : 30
  };
}

async function getLogsConfig(req, res) {
  try {
    const settings = await getLogsSettings();
    return res.status(200).json({ message: 'Log ayarları hazır', logs: defaultLogs(settings) });
  } catch (error) {
    return res.status(500).json({ message: 'Log ayarları alınamadı', error: error.message });
  }
}

async function updateLogsConfig(req, res) {
  try {
    const body = req.body || {};
    const level = String(body.level || '').trim();
    const retentionDays = Number(body.retentionDays);
    if (!VALID_LOG_LEVELS.includes(level)) {
      return res.status(400).json({ message: 'Geçersiz log seviyesi' });
    }
    if (!VALID_RETENTION_DAYS.includes(retentionDays)) {
      return res.status(400).json({ message: 'Geçersiz saklama süresi' });
    }
    const merged = { level, retentionDays };
    await upsertLogsSettings(merged);
    const actor = actorFromReq(req);
    writeAuditLog({ ...actor, action: 'update', entity: 'settings_logs', entityId: null, detail: `${level}/${retentionDays}` }).catch(() => {});
    return res.status(200).json({ message: 'Log ayarları kaydedildi', logs: merged });
  } catch (error) {
    return res.status(500).json({ message: 'Log ayarları kaydedilemedi', error: error.message });
  }
}

/* ── Security ── */

const VALID_SESSION_TIMEOUTS = [15, 30, 60, 240, 480, 0];

function defaultSecurity(s) {
  const sec = s || {};
  const sessionTimeout = VALID_SESSION_TIMEOUTS.includes(Number(sec.sessionTimeout)) ? Number(sec.sessionTimeout) : 480;
  const maxLoginAttempts = Math.min(Math.max(Number(sec.maxLoginAttempts) || 5, 1), 20);
  const minPasswordLength = Math.min(Math.max(Number(sec.minPasswordLength) || 8, 6), 32);
  return { sessionTimeout, maxLoginAttempts, minPasswordLength };
}

async function getSecurityConfig(req, res) {
  try {
    const settings = await getSecuritySettings();
    return res.status(200).json({ message: 'Güvenlik ayarları hazır', security: defaultSecurity(settings) });
  } catch (error) {
    return res.status(500).json({ message: 'Güvenlik ayarları alınamadı', error: error.message });
  }
}

async function updateSecurityConfig(req, res) {
  try {
    const body = req.body || {};
    const sessionTimeout = Number(body.sessionTimeout);
    const maxLoginAttempts = Number(body.maxLoginAttempts);
    const minPasswordLength = Number(body.minPasswordLength);
    if (!VALID_SESSION_TIMEOUTS.includes(sessionTimeout)) {
      return res.status(400).json({ message: 'Geçersiz oturum süresi' });
    }
    if (!Number.isFinite(maxLoginAttempts) || maxLoginAttempts < 1 || maxLoginAttempts > 20) {
      return res.status(400).json({ message: 'Maks. giriş denemesi 1-20 arasında olmalıdır' });
    }
    if (!Number.isFinite(minPasswordLength) || minPasswordLength < 6 || minPasswordLength > 32) {
      return res.status(400).json({ message: 'Min. şifre uzunluğu 6-32 arasında olmalıdır' });
    }
    const merged = { sessionTimeout, maxLoginAttempts, minPasswordLength };
    await upsertSecuritySettings(merged);
    const actor = actorFromReq(req);
    writeAuditLog({ ...actor, action: 'update', entity: 'settings_security', entityId: null, detail: `timeout:${sessionTimeout}` }).catch(() => {});
    return res.status(200).json({ message: 'Güvenlik ayarları kaydedildi', security: merged });
  } catch (error) {
    return res.status(500).json({ message: 'Güvenlik ayarları kaydedilemedi', error: error.message });
  }
}
