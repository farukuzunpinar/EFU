const express = require('express');
const { requireAuth, authorizePermission } = require('../middleware/authMiddleware');
const {
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
} = require('../controllers/settingsController');

const router = express.Router();

router.get('/smtp', requireAuth, authorizePermission('settings', 'view'), getSmtpSettingsConfig);
router.put('/smtp', requireAuth, authorizePermission('settings', 'update'), updateSmtpSettingsConfig);

router.get('/notifications', requireAuth, authorizePermission('settings', 'view'), getNotificationsConfig);
router.put('/notifications', requireAuth, authorizePermission('settings', 'update'), updateNotificationsConfig);

router.get('/logs', requireAuth, authorizePermission('settings', 'view'), getLogsConfig);
router.put('/logs', requireAuth, authorizePermission('settings', 'update'), updateLogsConfig);

router.get('/security', requireAuth, authorizePermission('settings', 'view'), getSecurityConfig);
router.put('/security', requireAuth, authorizePermission('settings', 'update'), updateSecurityConfig);

router.get('/logs/audit', requireAuth, authorizePermission('settings', 'view'), getAuditLogsConfig);
router.get('/references', requireAuth, authorizePermission('settings', 'view'), getCustomerReferralSourcesConfig);
router.put('/references', requireAuth, authorizePermission('settings', 'update'), updateCustomerReferralSourcesConfig);

module.exports = router;

