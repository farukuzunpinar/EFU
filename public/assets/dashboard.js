const TOKEN_KEY = 'efu_token';
    const THEME_KEY = 'efu_theme';
  const THEME_MODE_KEY = 'efu_theme_mode';
    const DEFAULT_VIEW_KEY = 'efu_default_view';
    const PAGE_SIZE_KEY = 'efu_page_size';
    const API_FALLBACK_ORIGIN = 'http://localhost:5000';

    const statusEl = document.getElementById('status');
    const resultEl = document.getElementById('result');
    const logoutBtn = document.getElementById('logoutBtn');
    const themeToggleBtnEl = document.getElementById('themeToggleBtn');
    const mobileMenuToggleBtnEl = document.getElementById('mobileMenuToggleBtn');
    const mobileSidebarBackdropEl = document.getElementById('mobileSidebarBackdrop');
    const homeNavBtn = document.getElementById('homeNavBtn');
    const openProfileBtn = document.getElementById('openProfileBtn');
    const menuItems = document.querySelectorAll('.menu-item');
    const viewTitleEl = document.getElementById('viewTitle');
    const viewSubtitleEl = document.getElementById('viewSubtitle');
    const projectStatusCardsEl = document.getElementById('projectStatusCards');
    const openTicketsStatusEl = document.getElementById('openTicketsStatus');
    const openTicketsBodyEl = document.getElementById('openTicketsBody');
    const goToSupportViewBtn = document.getElementById('goToSupportViewBtn');
    const latestCustomerBoxEl = document.getElementById('latestCustomerBox');
    const customersStatusEl = document.getElementById('customersStatus');
    const customersBodyEl = document.getElementById('customersBody');
    const ownersBodyEl = document.getElementById('ownersBody');
    const ownerCountBadge = document.getElementById('ownerCountBadge');
    const customerCountBadge = document.getElementById('customerCountBadge');
    const projectInventoryEl = document.getElementById('projectInventory');
    const customerActivityEl = document.getElementById('customerActivity');
    const customerSearchEl = document.getElementById('customerSearch');
    const openCreateCustomerBtn = document.getElementById('openCreateCustomerBtn');

    // New customer view elements (split views)
    const customersInitialViewEl = document.getElementById('customersInitialView');
    const customersTableViewOwnersEl = document.getElementById('customersTableViewOwners');
    const customersTableViewPlainEl = document.getElementById('customersTableViewPlain');
    const selectOwnersBtn = document.getElementById('selectOwnersBtn');
    const selectPlainBtn = document.getElementById('selectPlainBtn');
    const backFromOwnersBtn = document.getElementById('backFromOwnersBtn');
    const backFromPlainBtn = document.getElementById('backFromPlainBtn');
    const openCreateCustomerBtn2 = document.getElementById('openCreateCustomerBtn2');
    const openCreateCustomerBtn3 = document.getElementById('openCreateCustomerBtn3');
    const customerSearchOwners = document.getElementById('customerSearchOwners');
    const customerSearchPlain = document.getElementById('customerSearchPlain');
    const customersStatusOwners = document.getElementById('customersStatusOwners');
    const customersStatusPlain = document.getElementById('customersStatusPlain');
    const ownerCountInitial = document.getElementById('ownerCountInitial');
    const customerCountInitial = document.getElementById('customerCountInitial');
    const profileResultEl = document.getElementById('profileResult');
    const profileHeaderBox = document.getElementById('profileHeaderBox');
    const profileHeaderPhoto = document.getElementById('profileHeaderPhoto');
    const profileHeaderName = document.getElementById('profileHeaderName');
    const profileUpdateForm = document.getElementById('profileUpdateForm');
    const profileUpdatePhoto = document.getElementById('profileUpdatePhoto');
    const profilePhotoInput = document.getElementById('profilePhotoInput');
    const profileNameInput = document.getElementById('profileNameInput');
    const profileEmailInput = document.getElementById('profileEmailInput');
    const profilePhoneInput = document.getElementById('profilePhoneInput');
    const profileUpdateStatus = document.getElementById('profileUpdateStatus');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const passwordFormEl = document.getElementById('passwordForm');
    const passwordFormStatusEl = document.getElementById('passwordFormStatus');
    const currentPasswordEl = document.getElementById('currentPassword');
    const newPasswordEl = document.getElementById('newPassword');
    const confirmPasswordEl = document.getElementById('confirmPassword');
    const savePasswordBtn = document.getElementById('savePasswordBtn');
    const appAnnouncerEl = document.getElementById('appAnnouncer');
    const toastStackEl = document.getElementById('toastStack');

    const openSupportCreateModalBtn = document.getElementById('openSupportCreateModalBtn');
    const supportTicketModalEl = document.getElementById('supportTicketModal');
    const closeSupportTicketModalBtn = document.getElementById('closeSupportTicketModalBtn');
    const cancelSupportTicketBtn = document.getElementById('cancelSupportTicketBtn');
    const supportTicketFormEl = document.getElementById('supportTicketForm');
    const supportFullNameEl = document.getElementById('supportFullName');
    const supportPhoneEl = document.getElementById('supportPhone');
    const supportEmailEl = document.getElementById('supportEmail');
    const supportDescriptionEl = document.getElementById('supportDescription');
    const supportTagEl = document.getElementById('supportTag');
    const supportTicketStatusEl = document.getElementById('supportTicketStatus');
    const supportAttachmentsEl = document.getElementById('supportAttachments');
    const saveSupportTicketBtn = document.getElementById('saveSupportTicketBtn');
    const supportFormStatusEl = document.getElementById('supportFormStatus');
    const supportSearchEl = document.getElementById('supportSearch');
    const supportStatusFilterEl = document.getElementById('supportStatusFilter');
    const supportTicketsStatusEl = document.getElementById('supportTicketsStatus');
    const supportTicketsBodyEl = document.getElementById('supportTicketsBody');

    const supportNotesModalEl = document.getElementById('supportNotesModal');
    const closeSupportNotesModalBtn = document.getElementById('closeSupportNotesModalBtn');
    const supportNotesTicketMetaEl = document.getElementById('supportNotesTicketMeta');
    const supportTicketAttachmentsBoxEl = document.getElementById('supportTicketAttachmentsBox');
    const supportNotesListEl = document.getElementById('supportNotesList');
    const supportNoteFormEl = document.getElementById('supportNoteForm');
    const supportNoteTextEl = document.getElementById('supportNoteText');
    const supportNoteAttachmentsEl = document.getElementById('supportNoteAttachments');
    const supportNotesStatusEl = document.getElementById('supportNotesStatus');
    const saveSupportNoteBtn = document.getElementById('saveSupportNoteBtn');

    const tagNameInputEl = document.getElementById('tagNameInput');
    const createTagBtn = document.getElementById('createTagBtn');
    const tagsStatusEl = document.getElementById('tagsStatus');
    const tagsListEl = document.getElementById('tagsList');
    const referenceSourceInputEl = document.getElementById('referenceSourceInput');
    const createReferenceSourceBtn = document.getElementById('createReferenceSourceBtn');
    const referencesStatusEl = document.getElementById('referencesStatus');
    const referencesListEl = document.getElementById('referencesList');
    const smtpSettingsFormEl = document.getElementById('smtpSettingsForm');
    const smtpHostEl = document.getElementById('smtpHost');
    const smtpPortEl = document.getElementById('smtpPort');
    const smtpUserEl = document.getElementById('smtpUser');
    const smtpFromEl = document.getElementById('smtpFrom');
    const smtpPassEl = document.getElementById('smtpPass');
    const smtpUseSecureEl = document.getElementById('smtpUseSecure');
    const smtpSettingsStatusEl = document.getElementById('smtpSettingsStatus');
    const saveSmtpSettingsBtn = document.getElementById('saveSmtpSettingsBtn');

    const customerModalEl = document.getElementById('customerModal');
    const customerModalTitleEl = document.getElementById('customerModalTitle');
    const customerModalSubtitleEl = document.getElementById('customerModalSubtitle');
    const customerFormEl = document.getElementById('customerForm');
    const customerFormStatusEl = document.getElementById('customerFormStatus');
    const closeCustomerModalBtn = document.getElementById('closeCustomerModalBtn');
    const cancelCustomerBtn = document.getElementById('cancelCustomerBtn');
    const saveCustomerBtn = document.getElementById('saveCustomerBtn');
    const firstNameEl = document.getElementById('firstName');
    const lastNameEl = document.getElementById('lastName');
    const identityNumberEl = document.getElementById('identityNumber');
    const birthDateEl = document.getElementById('birthDate');
    const occupationEl = document.getElementById('occupation');
    const phonePrimaryEl = document.getElementById('phonePrimary');
    const phoneSecondaryEl = document.getElementById('phoneSecondary');
    const emailEl = document.getElementById('email');
    const addressEl = document.getElementById('address');
    const detailDescriptionEl = document.getElementById('detailDescription');
    const referenceNameEl = document.getElementById('referenceName');
    const referralSourceEl = document.getElementById('referralSource');
    const projectIdEl = document.getElementById('projectId');
    const unitIdEl = document.getElementById('unitId');
    const assignmentStatusEl = document.getElementById('assignmentStatus');
    const unitInventoryNoteEl = document.getElementById('unitInventoryNote');

    const confirmOverlayEl = document.getElementById('confirmOverlay');
    const confirmTitleEl = document.getElementById('confirmTitle');
    const confirmTextEl = document.getElementById('confirmText');
    const confirmCancelEl = document.getElementById('confirmCancel');
    const confirmAcceptEl = document.getElementById('confirmAccept');

    // Initialize profile header with default avatar
    if (profileHeaderPhoto) {
      profileHeaderPhoto.src = '/images/profile/default-user.svg';
    }
    if (profileHeaderName) {
      profileHeaderName.textContent = '-';
    }

    const viewMeta = {
      dashboard: {
        title: 'Ana Sayfa',
        subtitle: 'Müşteri, proje ve satış durumunu canlı olarak izleyin.'
      },
      customers: {
        title: 'Müşteriler',
        subtitle: ''
      },
      projects: {
        title: 'Projeler',
        subtitle: 'Proje ekle, düzenle ve sil. Proje için daire stoğunu Konutlar menüsünden yönetin.'
      },
      units: {
        title: 'Konutlar',
        subtitle: 'Daire / konut ekle, düzenle ve sil. Satılmış daireler müşteri silinmeden kaldırılamaz.'
      },
      reports: {
        title: 'Raporlar',
        subtitle: 'Bu bölüm daha sonra doldurulacak.'
      },
      calculations: {
        title: 'Hesaplama',
        subtitle: 'Bu bölüm daha sonra doldurulacak.'
      },
      'mef-assist': {
        title: 'Mef Assist',
        subtitle: 'Bu bölüm daha sonra doldurulacak.'
      },
      'mef-prive': {
        title: 'Mef Prive',
        subtitle: 'Bu bölüm daha sonra doldurulacak.'
      },
      users: {
        title: 'Kullanıcılar',
        subtitle: 'Kullanıcı listesini görüntüleyin, filtreleyin ve yetkiniz varsa yönetin.'
      },
      profile: {
        title: 'Profilim',
        subtitle: 'Hesap bilgilerinizi görüntüleyin ve şifrenizi güncelleyin.'
      },
      support: {
        title: 'Destek',
        subtitle: 'Destek ticketlarını oluşturun, not ekleyin ve açık/kapalı durumunu yönetin.'
      },
      settings: {
        title: 'Ayarlar',
        subtitle: 'Aktif oturum bilgileri ve destek etiket yönetimi.'
      }
    };

    const viewRoutes = {
      dashboard: '/dashboard',
      projects: '/projects',
      units: '/units',
      customers: '/customers',
      reports: '/reports',
      calculations: '/calculations',
      'mef-assist': '/mef-assist',
      'mef-prive': '/mef-prive',
      support: '/support',
      users: '/users',
      settings: '/settings',
      profile: '/profile'
    };

    function normalizePath(pathname) {
      if (!pathname) {
        return '/dashboard';
      }

      const trimmed = pathname.replace(/\/+$/, '') || '/';
      return trimmed === '/' ? '/dashboard' : trimmed.toLowerCase();
    }

    function getViewFromLocation() {
      const pathView = Object.entries(viewRoutes).find(([, routePath]) => routePath === normalizePath(window.location.pathname));
      if (pathView) {
        return pathView[0];
      }

      const hashView = window.location.hash.replace(/^#/, '').trim().toLowerCase();
      if (hashView && viewMeta[hashView]) {
        return hashView;
      }

      return 'dashboard';
    }

    let currentToken = null;
    let currentUser = null;
    let customersCache = [];
    let inventoryState = { projects: [], units: [] };
    let projectsCache = [];
    let unitsCache = [];
    let confirmResolver = null;
    let customerModalMode = 'create';
    let editingCustomerId = null;
    let lastFocusedElement = null;
    let auditLogCurrentPage = 1;

    const customerFieldValidators = {
      phonePrimary: (value) => {
        const cleaned = value.replace(/\s/g, '');
        if (!/^\d{11}$/.test(cleaned)) {
          return 'Telefon 1 tam olarak 11 haneli olmalıdır (boşluksuz rakamlar)';
        }
        return null;
      },
      phoneSecondary: (value) => {
        const cleaned = value.replace(/\s/g, '');
        if (!cleaned) {
          return null;
        }
        if (!/^\d{11}$/.test(cleaned)) {
          return 'Telefon 2 tam olarak 11 haneli olmalıdır (boşluksuz rakamlar)';
        }
        return null;
      },
      identityNumber: (value) => {
        if (!value) return 'TC Kimlik No boş bırakılamaz';
        const cleaned = value.replace(/\s/g, '');
        if (!/^\d{11}$/.test(cleaned)) {
          return 'TC Kimlik No tam olarak 11 haneli olmalıdır';
        }
        return null;
      },
      firstName: (value) => {
        if (!value) return 'İsim boş bırakılamaz';
        if (value.trim().length < 2) return 'İsim en az 2 karakter olmalıdır';
        return null;
      },
      lastName: (value) => {
        if (!value) return 'Soyisim boş bırakılamaz';
        if (value.trim().length < 2) return 'Soyisim en az 2 karakter olmalıdır';
        return null;
      },
      email: (value) => {
        if (!value) return 'Email boş bırakılamaz';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Geçerli bir email adresi girin';
        }
        return null;
      },
      occupation: (value) => {
        if (!value) return 'Meslek boş bırakılamaz';
        return null;
      },
      birthDate: (value) => {
        if (!value) return 'Doğum Tarihi boş bırakılamaz';
        return null;
      },
      address: (value) => {
        if (!value || !value.trim()) return 'Adres boş bırakılamaz';
        return null;
      }
    };

    function setupCustomerFormValidation() {
      if (!customerFormEl || customerFormEl.dataset.validationReady === '1') {
        return;
      }

      // Rakam-only filtresini uygula: identityNumber, phonePrimary, phoneSecondary
      const numericFields = ['identityNumber', 'phonePrimary', 'phoneSecondary'];
      numericFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (!field) return;
        
        field.addEventListener('input', (e) => {
          // Sadece rakamları tut, boşluk ve diğer karakterleri çıkar
          e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 11);
        });
      });

      const validationFields = Object.keys(customerFieldValidators);
      validationFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (!field) return;

        let errorSpan = field.parentElement.querySelector('.field-error');
        if (!errorSpan) {
          errorSpan = document.createElement('div');
          errorSpan.className = 'field-error';
          field.parentElement.appendChild(errorSpan);
        }

        const validateAndDisplay = () => {
          const error = customerFieldValidators[fieldName](field.value);
          if (error) {
            errorSpan.textContent = error;
            field.classList.add('field-error-state');
          } else {
            errorSpan.textContent = '';
            field.classList.remove('field-error-state');
          }
        };

        field.addEventListener('input', validateAndDisplay);
        field.addEventListener('blur', validateAndDisplay);
        field.addEventListener('change', validateAndDisplay);
      });

      customerFormEl.dataset.validationReady = '1';
    }

    function getCustomerFieldErrorEl(field) {
      if (!field || !field.parentElement) {
        return null;
      }

      let errorEl = field.parentElement.querySelector('.field-error');
      if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'field-error';
        field.parentElement.appendChild(errorEl);
      }

      return errorEl;
    }

    function setCustomerFieldError(field, message) {
      if (!field) {
        return;
      }

      const errorEl = getCustomerFieldErrorEl(field);
      if (!errorEl) {
        return;
      }

      errorEl.textContent = message || '';
      field.classList.toggle('field-error-state', Boolean(message));
    }

    function clearCustomerFieldErrors() {
      [
        firstNameEl,
        lastNameEl,
        identityNumberEl,
        occupationEl,
        phonePrimaryEl,
        phoneSecondaryEl,
        emailEl,
        addressEl,
        projectIdEl,
        unitIdEl,
        assignmentStatusEl
      ].forEach((field) => setCustomerFieldError(field, ''));
    }

    function applyCustomerBackendFieldError(message) {
      const text = String(message || '').toLowerCase();

      if (text.includes('isim ve soyisim')) {
        setCustomerFieldError(firstNameEl, 'Ayni isim ve soyisim kullanilamaz.');
        setCustomerFieldError(lastNameEl, 'Ayni isim ve soyisim kullanilamaz.');
        if (firstNameEl) firstNameEl.focus();
        return true;
      }

      if (text.includes('tc kimlik')) {
        setCustomerFieldError(identityNumberEl, 'TC kimlik numarasi zaten kayitli.');
        if (identityNumberEl) identityNumberEl.focus();
        return true;
      }

      if (text.includes('email')) {
        setCustomerFieldError(emailEl, 'Email adresi zaten kayitli.');
        if (emailEl) emailEl.focus();
        return true;
      }

      if (text.includes('telefon 1')) {
        setCustomerFieldError(phonePrimaryEl, 'Telefon 1 baska kayitta kullaniliyor.');
        if (phonePrimaryEl) phonePrimaryEl.focus();
        return true;
      }

      if (text.includes('telefon 2')) {
        setCustomerFieldError(phoneSecondaryEl, 'Telefon 2 baska kayitta kullaniliyor.');
        if (phoneSecondaryEl) phoneSecondaryEl.focus();
        return true;
      }

      if (text.includes('konut')) {
        setCustomerFieldError(unitIdEl, 'Secilen konut zaten bir musteriye bagli.');
        if (unitIdEl) unitIdEl.focus();
        return true;
      }

      return false;
    }
    let projectModalMode = 'create';
    let editingProjectId = null;
    let unitModalMode = 'create';
    let editingUnitId = null;
    let supportTagsCache = [];
    let customerReferralSourcesCache = [];
    let supportTicketsCache = [];
    let supportCurrentPage = 1;
    let projectsCurrentPage = 1;
    let unitsCurrentPage = 1;
    let usersCurrentPage = 1;
    let customersOwnersCurrentPage = 1;
    let customersPlainCurrentPage = 1;
    let supportTicketModalMode = 'create';
    let editingSupportTicketId = null;
    let supportNotesTicketId = null;
    let usersCache = [];
    let userModalMode = 'create';
    let editingUserId = null;
    let permissionMap = {};
    let rolesCache = [];
    let editingRoleId = null;
    let authRedirectHandled = false;
    let lastToastKey = '';
    let lastToastAt = 0;

    const DEFAULT_PERMISSION_MODULES = [
      'dashboard',
      'projects',
      'units',
      'customers',
      'reports',
      'calculations',
      'mef-assist',
      'mef-prive',
      'support',
      'users',
      'settings',
      'profile',
      'roles'
    ];

    const PERMISSION_MODULE_LABELS = {
      dashboard: 'Ana Sayfa',
      projects: 'Projeler',
      units: 'Konutlar',
      customers: 'Musteriler',
      reports: 'Raporlar',
      calculations: 'Hesaplama',
      'mef-assist': 'Mef Assist',
      'mef-prive': 'Mef Prive',
      support: 'Destek',
      users: 'Kullanicilar',
      settings: 'Ayarlar',
      profile: 'Profil',
      roles: 'Rol Yonetimi'
    };

    const projectsStatusEl = document.getElementById('projectsStatus');
    const projectsBodyEl = document.getElementById('projectsBody');
    const projectActivityEl = document.getElementById('projectActivity');
    const projectSearchEl = document.getElementById('projectSearch');
    const openCreateProjectBtn = document.getElementById('openCreateProjectBtn');
    const projectModalEl = document.getElementById('projectModal');
    const projectModalTitleEl = document.getElementById('projectModalTitle');
    const projectModalSubtitleEl = document.getElementById('projectModalSubtitle');
    const projectFormEl = document.getElementById('projectForm');
    const projectFormStatusEl = document.getElementById('projectFormStatus');
    const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
    const cancelProjectBtn = document.getElementById('cancelProjectBtn');
    const saveProjectBtn = document.getElementById('saveProjectBtn');
    const projectNameInputEl = document.getElementById('projectNameInput');

    const unitsStatusEl = document.getElementById('unitsStatus');
    const unitsBodyEl = document.getElementById('unitsBody');
    const unitActivityEl = document.getElementById('unitActivity');
    const unitSearchEl = document.getElementById('unitSearch');
    const unitProjectFilterEl = document.getElementById('unitProjectFilter');
    const unitStatusFilterEl = document.getElementById('unitStatusFilter');
    const openCreateUnitBtn = document.getElementById('openCreateUnitBtn');
    const unitModalEl = document.getElementById('unitModal');
    const unitModalTitleEl = document.getElementById('unitModalTitle');
    const unitModalSubtitleEl = document.getElementById('unitModalSubtitle');
    const unitFormEl = document.getElementById('unitForm');
    const unitFormStatusEl = document.getElementById('unitFormStatus');
    const closeUnitModalBtn = document.getElementById('closeUnitModalBtn');
    const cancelUnitBtn = document.getElementById('cancelUnitBtn');
    const saveUnitBtn = document.getElementById('saveUnitBtn');
    const unitProjectSelectEl = document.getElementById('unitProjectSelect');
    const unitLabelInputEl = document.getElementById('unitLabelInput');

    const usersStatusEl = document.getElementById('usersStatus');
    const usersBodyEl = document.getElementById('usersBody');
    const userSearchEl = document.getElementById('userSearch');
    const userRoleFilterEl = document.getElementById('userRoleFilter');
    const openCreateUserBtn = document.getElementById('openCreateUserBtn');
    const userModalEl = document.getElementById('userModal');
    const userModalTitleEl = document.getElementById('userModalTitle');
    const userModalSubtitleEl = document.getElementById('userModalSubtitle');
    const userFormEl = document.getElementById('userForm');
    const userFormStatusEl = document.getElementById('userFormStatus');
    const closeUserModalBtn = document.getElementById('closeUserModalBtn');
    const cancelUserBtn = document.getElementById('cancelUserBtn');
    const saveUserBtn = document.getElementById('saveUserBtn');
    const userNameInputEl = document.getElementById('userNameInput');
    const userEmailInputEl = document.getElementById('userEmailInput');
    const userPhoneInputEl = document.getElementById('userPhoneInput');
    const userRoleInputEl = document.getElementById('userRoleInput');
    const userPasswordInputEl = document.getElementById('userPasswordInput');
    const openRoleManagerBtn = document.getElementById('openRoleManagerBtn');
    const openRoleCreateBtn = document.getElementById('openRoleCreateBtn');
    const roleModalEl = document.getElementById('roleModal');
    const closeRoleModalBtn = document.getElementById('closeRoleModalBtn');
    const cancelRoleBtn = document.getElementById('cancelRoleBtn');
    const roleFormEl = document.getElementById('roleForm');
    const roleFormStatusEl = document.getElementById('roleFormStatus');
    const roleListStatusEl = document.getElementById('roleListStatus');
    const roleListBodyEl = document.getElementById('roleListBody');
    const roleEditorToggleBtnEl = document.getElementById('roleEditorToggleBtn');
    const roleEditorBodyEl = document.getElementById('roleEditorBody');
    const roleEditorTitleEl = document.getElementById('roleEditorTitle');
    const roleNameInputEl = document.getElementById('roleNameInput');
    const deleteRoleBtn = document.getElementById('deleteRoleBtn');
    const saveRoleBtn = document.getElementById('saveRoleBtn');
    const rolePermissionsBodyEl = document.getElementById('rolePermissionsBody');

    const usersMenuItemEl = document.querySelector('.menu-item[data-view="users"]');
    const settingsMenuItemEl = document.querySelector('.menu-item[data-view="settings"]');
    const settingsFeatureButtons = document.querySelectorAll('.settings-feature-card');
    const settingsFeaturePanels = document.querySelectorAll('.settings-feature-panel');
    const settingsPlaceholderTitleEl = document.getElementById('settingsPlaceholderTitle');
    const settingsPlaceholderTextEl = document.getElementById('settingsPlaceholderText');
    const prefDarkThemeEl = document.getElementById('prefDarkTheme');
    const prefDefaultViewEl = document.getElementById('prefDefaultView');
    const prefPageSizeEl = document.getElementById('prefPageSize');
    const userPrefsStatusEl = document.getElementById('userPrefsStatus');
    const saveUserPrefsBtnEl = document.getElementById('saveUserPrefsBtn');

    /* ── Notifications ── */
    const notificationsSettingsFormEl = document.getElementById('notificationsSettingsForm');
    const notifRecipientEmailEl = document.getElementById('notifRecipientEmail');
    const notifOnNewTicketEl = document.getElementById('notifOnNewTicket');
    const notifOnCloseTicketEl = document.getElementById('notifOnCloseTicket');
    const notifOnNewCustomerEl = document.getElementById('notifOnNewCustomer');
    const notificationsSettingsStatusEl = document.getElementById('notificationsSettingsStatus');
    const saveNotificationsSettingsBtnEl = document.getElementById('saveNotificationsSettingsBtn');

    /* ── Logs ── */
    const logsSettingsFormEl = document.getElementById('logsSettingsForm');
    const logLevelEl = document.getElementById('logLevel');
    const logRetentionDaysEl = document.getElementById('logRetentionDays');
    const logsSettingsStatusEl = document.getElementById('logsSettingsStatus');
    const saveLogsSettingsBtnEl = document.getElementById('saveLogsSettingsBtn');
    const auditLogRefreshBtnEl = document.getElementById('auditLogRefreshBtn');
    const auditLogStatusEl = document.getElementById('auditLogStatus');
    const auditLogBodyEl = document.getElementById('auditLogBody');
    const auditLogMetaEl = document.getElementById('auditLogMeta');
    const auditLogPrevBtnEl = document.getElementById('auditLogPrevBtn');
    const auditLogPageButtonsEl = document.getElementById('auditLogPageButtons');
    const auditLogNextBtnEl = document.getElementById('auditLogNextBtn');

    /* ── Security ── */
    const securitySettingsFormEl = document.getElementById('securitySettingsForm');
    const secSessionTimeoutEl = document.getElementById('secSessionTimeout');
    const secMaxLoginAttemptsEl = document.getElementById('secMaxLoginAttempts');
    const secMinPasswordLengthEl = document.getElementById('secMinPasswordLength');
    const securitySettingsStatusEl = document.getElementById('securitySettingsStatus');
    const saveSecuritySettingsBtnEl = document.getElementById('saveSecuritySettingsBtn');

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function announce(text) {
      appAnnouncerEl.textContent = text;
    }

    function formatProfileHeaderDisplayName(name) {
      const fullName = String(name || '').trim() || 'Profil';
      if (fullName.length <= 20) {
        return fullName;
      }
      return `${fullName.slice(0, 20)}...`;
    }

    function setStatus(el, level, text) {
      if (el) {
        // Tum bildirimleri toast'ta gosterdigimiz icin satir ici statusleri bos tutuyoruz.
        el.className = 'status';
        el.textContent = '';
      }

      if (text) {
        if (authRedirectHandled && isTokenErrorMessage(text)) {
          return;
        }
        showToast(text, level === 'bad' ? 'bad' : 'ok');
        announce(text);
      }
    }

    function clearStatus(el) {
      if (!el) {
        return;
      }

      el.className = 'status';
      el.textContent = '';
    }

    function getCurrentRole() {
      return String((currentUser && currentUser.role) || '').trim().toLowerCase();
    }

    function isAdminUser() {
      return getCurrentRole() === 'admin';
    }

    function getModulePermission(moduleName) {
      const normalizedModule = String(moduleName || '').trim().toLowerCase();
      if (!normalizedModule) {
        return { view: false, create: false, update: false, delete: false };
      }

      const modulePermission = permissionMap && permissionMap[normalizedModule];
      if (!modulePermission) {
        return { view: false, create: false, update: false, delete: false };
      }

      return {
        view: Boolean(modulePermission.view),
        create: Boolean(modulePermission.create),
        update: Boolean(modulePermission.update),
        delete: Boolean(modulePermission.delete)
      };
    }

    function hasPermission(moduleName, action = 'view') {
      if (isAdminUser()) {
        return true;
      }

      const normalizedAction = String(action || 'view').trim().toLowerCase();
      const permission = getModulePermission(moduleName);
      return Boolean(permission[normalizedAction]);
    }

    function canAccessView(viewName) {
      const normalizedView = String(viewName || '').trim().toLowerCase();
      if (!normalizedView || !viewMeta[normalizedView]) {
        return true;
      }

      return hasPermission(normalizedView, 'view');
    }

    function canManageOperationalData() {
      const modules = ['customers', 'projects', 'units', 'support'];
      return modules.some((moduleName) => {
        const permission = getModulePermission(moduleName);
        return permission.create || permission.update || permission.delete;
      });
    }

    function getReadOnlyCell(colspan = 1) {
      if (colspan > 1) {
        return `<td colspan="${colspan}"><span class="muted-note">Görüntüleme</span></td>`;
      }

      return '<td><span class="muted-note">Görüntüleme</span></td>';
    }

    function applyRolePermissions() {
      const canCreateCustomer = hasPermission('customers', 'create');
      const canCreateProject = hasPermission('projects', 'create');
      const canCreateUnit = hasPermission('units', 'create');
      const canCreateSupportTicket = hasPermission('support', 'create');
      const canCreateUser = hasPermission('users', 'create');
      const canManageRoles = isAdminUser() && hasPermission('roles', 'view');
      const canManageSettings = hasPermission('settings', 'update') || hasPermission('settings', 'create');
      const canManageSupportTags = hasPermission('support', 'update');
      const canUpdateProfile = hasPermission('profile', 'update');

      if (openCreateCustomerBtn) {
        openCreateCustomerBtn.disabled = !canCreateCustomer;
        openCreateCustomerBtn.title = canCreateCustomer ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (openCreateProjectBtn) {
        openCreateProjectBtn.disabled = !canCreateProject;
        openCreateProjectBtn.title = canCreateProject ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (openCreateUnitBtn) {
        openCreateUnitBtn.disabled = !canCreateUnit;
        openCreateUnitBtn.title = canCreateUnit ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (openSupportCreateModalBtn) {
        openSupportCreateModalBtn.disabled = !canCreateSupportTicket;
        openSupportCreateModalBtn.title = canCreateSupportTicket ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (openCreateUserBtn) {
        openCreateUserBtn.disabled = !canCreateUser;
        openCreateUserBtn.title = canCreateUser ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (openRoleManagerBtn) {
        openRoleManagerBtn.disabled = !canManageRoles;
        openRoleManagerBtn.title = canManageRoles ? '' : 'Bu alan sadece admin tarafindan yonetilebilir';
      }

      if (createTagBtn) {
        createTagBtn.disabled = !canManageSupportTags;
        createTagBtn.title = canManageSupportTags ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (saveSmtpSettingsBtn) {
        saveSmtpSettingsBtn.disabled = !canManageSettings;
        saveSmtpSettingsBtn.title = canManageSettings ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (createReferenceSourceBtn) {
        createReferenceSourceBtn.disabled = !canManageSettings;
        createReferenceSourceBtn.title = canManageSettings ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (savePasswordBtn) {
        savePasswordBtn.disabled = !canUpdateProfile;
        savePasswordBtn.title = canUpdateProfile ? '' : 'Bu islem icin yetkiniz yok';
      }

      if (tagNameInputEl) {
        tagNameInputEl.disabled = !canManageSupportTags;
      }

      if (referenceSourceInputEl) {
        referenceSourceInputEl.disabled = !canManageSettings;
      }

      if (supportTicketFormEl) {
        supportTicketFormEl.querySelectorAll('input, select, textarea, button').forEach((field) => {
          if (field.id === 'cancelSupportTicketBtn' || field.id === 'closeSupportTicketModalBtn') {
            return;
          }
          field.disabled = !canCreateSupportTicket;
        });
      }

      if (smtpSettingsFormEl) {
        smtpSettingsFormEl.querySelectorAll('input, select, textarea').forEach((field) => {
          field.disabled = !canManageSettings;
        });
      }

      if (passwordFormEl) {
        passwordFormEl.querySelectorAll('input, select, textarea').forEach((field) => {
          field.disabled = !canUpdateProfile;
        });
      }

      if (usersMenuItemEl) {
        usersMenuItemEl.title = hasPermission('users', 'view') ? '' : 'Bu bolum icin goruntuleme yetkiniz yok';
      }

      if (settingsMenuItemEl) {
        settingsMenuItemEl.title = hasPermission('settings', 'view') ? '' : 'Bu bolum icin goruntuleme yetkiniz yok';
      }
    }

    function openSettingsFeature(panelFeatureName, activeButtonFeatureName = panelFeatureName) {
      const normalizedPanel = String(panelFeatureName || '').trim().toLowerCase();
      const normalizedButton = String(activeButtonFeatureName || '').trim().toLowerCase();
      if (!normalizedPanel) {
        return;
      }

      settingsFeaturePanels.forEach((panel) => {
        const panelFeature = String(panel.getAttribute('data-feature-panel') || '').trim().toLowerCase();
        panel.classList.toggle('open', panelFeature === normalizedPanel);
      });

      settingsFeatureButtons.forEach((button) => {
        const buttonFeature = String(button.getAttribute('data-feature') || '').trim().toLowerCase();
        button.setAttribute('aria-expanded', buttonFeature === normalizedButton ? 'true' : 'false');
      });
    }

    function closeSettingsFeatures() {
      settingsFeaturePanels.forEach((panel) => {
        panel.classList.remove('open');
      });

      settingsFeatureButtons.forEach((button) => {
        button.setAttribute('aria-expanded', 'false');
      });
    }

    function isMobileViewport() {
      return window.matchMedia('(max-width: 980px)').matches;
    }

    function setMobileMenuState(open) {
      const shouldOpen = Boolean(open) && isMobileViewport();
      document.body.classList.toggle('mobile-menu-open', shouldOpen);

      if (mobileMenuToggleBtnEl) {
        mobileMenuToggleBtnEl.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
        mobileMenuToggleBtnEl.setAttribute('aria-label', shouldOpen ? 'Menüyü kapat' : 'Menüyü aç');
        mobileMenuToggleBtnEl.title = shouldOpen ? 'Menüyü kapat' : 'Menü';
        mobileMenuToggleBtnEl.innerHTML = shouldOpen
          ? '<span class="mobile-menu-toggle-icon" aria-hidden="true">✕</span><span class="mobile-menu-toggle-label">KAPAT</span>'
          : '<span class="mobile-menu-toggle-icon" aria-hidden="true">☰</span><span class="mobile-menu-toggle-label">MENÜ</span>';
      }
    }

    function closeMobileMenu() {
      setMobileMenuState(false);
    }

    function getAutoThemeByTime() {
      const hour = new Date().getHours();
      return hour >= 6 && hour < 18 ? 'light' : 'dark';
    }

    function getThemeMode() {
      return localStorage.getItem(THEME_MODE_KEY) === 'manual' ? 'manual' : 'auto';
    }

    function updateThemeToggleUi(theme, mode) {
      if (!themeToggleBtnEl) return;
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      themeToggleBtnEl.textContent = theme === 'dark' ? '🌙' : '🌞';
      themeToggleBtnEl.setAttribute('aria-label', `${nextTheme === 'dark' ? 'Koyu' : 'Açık'} temaya geç`);
      themeToggleBtnEl.setAttribute('title', mode === 'auto'
        ? `${nextTheme === 'dark' ? 'Koyu' : 'Açık'} temaya geç (otomatik mod geçersiz kılınır)`
        : `${nextTheme === 'dark' ? 'Koyu' : 'Açık'} temaya geç`);
    }

    function applyTheme(theme, mode = getThemeMode()) {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }

      if (prefDarkThemeEl) {
        prefDarkThemeEl.checked = theme === 'dark';
      }

      updateThemeToggleUi(theme, mode);
    }

    function startAutoThemeScheduler() {
      window.setInterval(() => {
        if (getThemeMode() !== 'auto') {
          return;
        }
        applyTheme(getAutoThemeByTime(), 'auto');
      }, 60 * 1000);
    }

    function loadUserPrefs() {
      const themeMode = getThemeMode();
      const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
      const theme = themeMode === 'manual' ? savedTheme : getAutoThemeByTime();
      const defaultView = localStorage.getItem(DEFAULT_VIEW_KEY) || 'dashboard';
      const pageSize = localStorage.getItem(PAGE_SIZE_KEY) || '25';

      applyTheme(theme, themeMode);

      if (prefDarkThemeEl) {
        prefDarkThemeEl.checked = theme === 'dark';
      }
      if (prefDefaultViewEl) {
        prefDefaultViewEl.value = defaultView;
      }
      if (prefPageSizeEl) {
        prefPageSizeEl.value = pageSize;
      }
    }

    function saveUserPrefs() {
      const theme = prefDarkThemeEl && prefDarkThemeEl.checked ? 'dark' : 'light';
      const defaultView = prefDefaultViewEl ? prefDefaultViewEl.value : 'dashboard';
      const pageSize = prefPageSizeEl ? prefPageSizeEl.value : '25';

      localStorage.setItem(THEME_MODE_KEY, 'manual');
      localStorage.setItem(THEME_KEY, theme);
      localStorage.setItem(DEFAULT_VIEW_KEY, defaultView);
      localStorage.setItem(PAGE_SIZE_KEY, pageSize);

      applyTheme(theme, 'manual');
      resetListPaginationStates();
      rerenderAllListTables();
      setStatus(userPrefsStatusEl, 'ok', 'Tercihler kaydedildi');
      setTimeout(() => clearStatus(userPrefsStatusEl), 3000);
    }

    function getListPageSize() {
      const raw = Number(localStorage.getItem(PAGE_SIZE_KEY) || '25');
      return [10, 25, 50, 100].includes(raw) ? raw : 25;
    }

    function paginateItems(items, currentPage) {
      const pageSize = getListPageSize();
      const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
      const safePage = Math.max(1, Math.min(currentPage, totalPages));
      const start = (safePage - 1) * pageSize;

      return {
        pageItems: items.slice(start, start + pageSize),
        totalPages,
        currentPage: safePage
      };
    }

    function renderPaginationButtons(totalPages, currentPage, buttonClass) {
      if (totalPages <= 1) {
        return '';
      }

      const buttons = [];
      for (let p = 1; p <= totalPages; p += 1) {
        const buttonStyle = p === currentPage ? 'primary-btn' : 'ghost-btn';
        buttons.push(`<button type="button" class="${buttonStyle} ${buttonClass}" data-page="${p}" style="min-width:32px;">${p}</button>`);
      }

      return `<div class="list-pagination">${buttons.join('')}</div>`;
    }

    function resetListPaginationStates() {
      supportCurrentPage = 1;
      projectsCurrentPage = 1;
      unitsCurrentPage = 1;
      usersCurrentPage = 1;
      customersOwnersCurrentPage = 1;
      customersPlainCurrentPage = 1;
      auditLogCurrentPage = 1;
    }

    function rerenderAllListTables() {
      renderSupportTicketsTable();
      renderProjectsTable();
      renderUnitsTable();
      renderUsersTable();
      renderCustomersTable('owners');
      renderCustomersTable('plain');

      const settingsViewIsOpen = Boolean(document.getElementById('view-settings') && document.getElementById('view-settings').classList.contains('active'));
      const logsPanelIsOpen = Boolean(document.getElementById('settingsPanelLogs') && document.getElementById('settingsPanelLogs').classList.contains('open'));
      if (settingsViewIsOpen && logsPanelIsOpen) {
        loadAuditLogs(1);
      }
    }

    async function loadNotificationsSettings() {
      if (!notificationsSettingsFormEl) return;
      clearStatus(notificationsSettingsStatusEl);
      try {
        const data = await api('/api/settings/notifications');
        const n = data.notifications || {};
        if (notifRecipientEmailEl) notifRecipientEmailEl.value = n.recipientEmail || '';
        if (notifOnNewTicketEl) notifOnNewTicketEl.checked = n.onNewTicket !== false;
        if (notifOnCloseTicketEl) notifOnCloseTicketEl.checked = Boolean(n.onCloseTicket);
        if (notifOnNewCustomerEl) notifOnNewCustomerEl.checked = Boolean(n.onNewCustomer);
      } catch (error) {
        setStatus(notificationsSettingsStatusEl, 'bad', error.message);
      }
    }

    async function saveNotificationsSettings(event) {
      event.preventDefault();
      if (!hasPermission('settings', 'update') && !hasPermission('settings', 'create')) {
        setStatus(notificationsSettingsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      clearStatus(notificationsSettingsStatusEl);
      const payload = {
        recipientEmail: notifRecipientEmailEl ? notifRecipientEmailEl.value.trim() : '',
        onNewTicket: Boolean(notifOnNewTicketEl && notifOnNewTicketEl.checked),
        onCloseTicket: Boolean(notifOnCloseTicketEl && notifOnCloseTicketEl.checked),
        onNewCustomer: Boolean(notifOnNewCustomerEl && notifOnNewCustomerEl.checked)
      };
      const btn = saveNotificationsSettingsBtnEl;
      if (btn) { btn.disabled = true; btn.textContent = 'Kaydediliyor...'; }
      try {
        const data = await api('/api/settings/notifications', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        setStatus(notificationsSettingsStatusEl, 'ok', data.message || 'Bildirim ayarları kaydedildi');
      } catch (error) {
        setStatus(notificationsSettingsStatusEl, 'bad', error.message);
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = 'Bildirim Ayarlarını Kaydet'; }
      }
    }

    async function loadLogsSettings() {
      if (!logsSettingsFormEl) return;
      clearStatus(logsSettingsStatusEl);
      try {
        const data = await api('/api/settings/logs');
        const l = data.logs || {};
        if (logLevelEl) logLevelEl.value = l.level || 'info';
        if (logRetentionDaysEl) logRetentionDaysEl.value = String(l.retentionDays || 30);
      } catch (error) {
        setStatus(logsSettingsStatusEl, 'bad', error.message);
      }
    }

    async function saveLogsSettings(event) {
      event.preventDefault();
      if (!hasPermission('settings', 'update') && !hasPermission('settings', 'create')) {
        setStatus(logsSettingsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      clearStatus(logsSettingsStatusEl);
      const payload = {
        level: logLevelEl ? logLevelEl.value : 'info',
        retentionDays: Number(logRetentionDaysEl ? logRetentionDaysEl.value : 30)
      };
      const btn = saveLogsSettingsBtnEl;
      if (btn) { btn.disabled = true; btn.textContent = 'Kaydediliyor...'; }
      try {
        const data = await api('/api/settings/logs', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        setStatus(logsSettingsStatusEl, 'ok', data.message || 'Log ayarları kaydedildi');
      } catch (error) {
        setStatus(logsSettingsStatusEl, 'bad', error.message);
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = 'Log Ayarlarını Kaydet'; }
      }
    }

    function auditActionLabel(action) {
      const normalized = String(action || '').toLowerCase();
      if (normalized === 'create') return 'Eklendi';
      if (normalized === 'update') return 'Güncellendi';
      if (normalized === 'delete') return 'Silindi';
      if (normalized === 'login') return 'Giriş';
      if (normalized === 'logout') return 'Çıkış';
      return action || '-';
    }

    function auditEntityLabel(entity) {
      const normalized = String(entity || '').toLowerCase();
      if (normalized === 'customer') return 'Müşteri';
      if (normalized === 'user') return 'Kullanıcı';
      if (normalized === 'user_role') return 'Kullanıcı Rolü';
      if (normalized === 'project') return 'Proje';
      if (normalized === 'unit') return 'Daire';
      if (normalized === 'role') return 'Rol';
      if (normalized === 'support_tag') return 'Destek Etiketi';
      if (normalized === 'support_ticket') return 'Destek Ticket';
      if (normalized === 'settings_smtp') return 'SMTP Ayarı';
      if (normalized === 'settings_notifications') return 'Bildirim Ayarı';
      if (normalized === 'settings_logs') return 'Log Ayarı';
      if (normalized === 'settings_security') return 'Güvenlik Ayarı';
      if (normalized === 'session') return 'Oturum';
      if (normalized === 'password') return 'Şifre';
      return entity || '-';
    }

    function formatAuditLogDate(value) {
      if (!value) return '-';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return '-';
      const pad = (n) => String(n).padStart(2, '0');
      return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} - ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    function renderAuditLogRows(logs) {
      if (!auditLogBodyEl) return;
      if (!Array.isArray(logs) || !logs.length) {
        auditLogBodyEl.innerHTML = '<tr><td colspan="5">Kayıt bulunamadı.</td></tr>';
        return;
      }

      auditLogBodyEl.innerHTML = logs.map((log) => {
        const user = escapeHtml(log.user_email || '-');
        const action = escapeHtml(auditActionLabel(log.action));
        const entity = escapeHtml(auditEntityLabel(log.entity));
        const detail = escapeHtml(log.detail || '-');
        const when = escapeHtml(formatAuditLogDate(log.created_at));
        return `<tr><td>${when}</td><td>${user}</td><td>${action}</td><td>${entity}</td><td>${detail}</td></tr>`;
      }).join('');
    }

    async function loadAuditLogs(page = 1) {
      if (!auditLogBodyEl) return;
      clearStatus(auditLogStatusEl);

      const pageSize = getListPageSize();
      const safePage = Math.max(1, Number(page) || 1);
      const safeOffset = (safePage - 1) * pageSize;

      const params = new URLSearchParams({
        limit: String(pageSize),
        offset: String(safeOffset)
      });

      try {
        const data = await api(`/api/settings/logs/audit?${params.toString()}`);
        const logs = Array.isArray(data.logs) ? data.logs : [];
        const total = Number(data.total) || 0;
        const currentOffset = Number(data.offset) || safeOffset;
        const totalPages = Math.max(1, Math.ceil(total / pageSize));
        auditLogCurrentPage = Math.max(1, Math.min(totalPages, Math.floor(currentOffset / pageSize) + 1));

        renderAuditLogRows(logs);

        if (auditLogMetaEl) {
          if (!total || !logs.length) {
            auditLogMetaEl.textContent = 'Toplam 0 kayıt';
          } else {
            const start = currentOffset + 1;
            const end = currentOffset + logs.length;
            auditLogMetaEl.textContent = `${start} - ${end} / toplam ${total} kayıt`;
          }
        }

        if (auditLogPageButtonsEl) {
          auditLogPageButtonsEl.innerHTML = renderPaginationButtons(totalPages, auditLogCurrentPage, 'audit-log-pagination-btn');
        }
        if (auditLogPrevBtnEl) {
          auditLogPrevBtnEl.disabled = auditLogCurrentPage <= 1;
        }
        if (auditLogNextBtnEl) {
          auditLogNextBtnEl.disabled = auditLogCurrentPage >= totalPages;
        }
      } catch (error) {
        if (auditLogBodyEl) {
          auditLogBodyEl.innerHTML = '<tr><td colspan="5">Kayıtlar yüklenemedi.</td></tr>';
        }
        if (auditLogMetaEl) {
          auditLogMetaEl.textContent = '';
        }
        if (auditLogPageButtonsEl) {
          auditLogPageButtonsEl.innerHTML = '';
        }
        if (auditLogPrevBtnEl) {
          auditLogPrevBtnEl.disabled = true;
        }
        if (auditLogNextBtnEl) {
          auditLogNextBtnEl.disabled = true;
        }
        setStatus(auditLogStatusEl, 'bad', error.message);
      }
    }

    async function loadSecuritySettings() {
      if (!securitySettingsFormEl) return;
      clearStatus(securitySettingsStatusEl);
      try {
        const data = await api('/api/settings/security');
        const s = data.security || {};
        if (secSessionTimeoutEl) secSessionTimeoutEl.value = String(s.sessionTimeout !== undefined ? s.sessionTimeout : 480);
        if (secMaxLoginAttemptsEl) secMaxLoginAttemptsEl.value = String(s.maxLoginAttempts || 5);
        if (secMinPasswordLengthEl) secMinPasswordLengthEl.value = String(s.minPasswordLength || 8);
      } catch (error) {
        setStatus(securitySettingsStatusEl, 'bad', error.message);
      }
    }

    async function saveSecuritySettings(event) {
      event.preventDefault();
      if (!hasPermission('settings', 'update') && !hasPermission('settings', 'create')) {
        setStatus(securitySettingsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      clearStatus(securitySettingsStatusEl);
      const payload = {
        sessionTimeout: Number(secSessionTimeoutEl ? secSessionTimeoutEl.value : 480),
        maxLoginAttempts: Number(secMaxLoginAttemptsEl ? secMaxLoginAttemptsEl.value : 5),
        minPasswordLength: Number(secMinPasswordLengthEl ? secMinPasswordLengthEl.value : 8)
      };
      const btn = saveSecuritySettingsBtnEl;
      if (btn) { btn.disabled = true; btn.textContent = 'Kaydediliyor...'; }
      try {
        const data = await api('/api/settings/security', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        setStatus(securitySettingsStatusEl, 'ok', data.message || 'Güvenlik ayarları kaydedildi');
      } catch (error) {
        setStatus(securitySettingsStatusEl, 'bad', error.message);
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = 'Güvenlik Ayarlarını Kaydet'; }
      }
    }

    function buildLegacyPermissionMap(roleName) {
      const normalizedRole = String(roleName || '').trim().toLowerCase();
      const map = {};
      DEFAULT_PERMISSION_MODULES.forEach((moduleName) => {
        map[moduleName] = { view: false, create: false, update: false, delete: false };
      });

      if (normalizedRole === 'admin') {
        DEFAULT_PERMISSION_MODULES.forEach((moduleName) => {
          map[moduleName] = { view: true, create: true, update: true, delete: true };
        });
        return map;
      }

      ['dashboard', 'projects', 'units', 'customers', 'reports', 'calculations', 'mef-assist', 'mef-prive', 'support', 'profile'].forEach((moduleName) => {
        map[moduleName].view = true;
      });

      if (normalizedRole === 'manager') {
        ['projects', 'units', 'customers'].forEach((moduleName) => {
          map[moduleName].create = true;
          map[moduleName].update = true;
          map[moduleName].delete = true;
        });

        map.support.create = true;
        map.support.update = true;
        map.profile.update = true;
      }

      if (normalizedRole === 'user') {
        map.profile.update = true;
      }

      return map;
    }

    function getPermissionModules() {
      const roleModules = rolesCache.flatMap((role) => Object.keys(role.permissions || {}));
      const currentModules = permissionMap ? Object.keys(permissionMap) : [];
      const merged = Array.from(new Set(DEFAULT_PERMISSION_MODULES.concat(roleModules, currentModules)));
      return merged.filter(Boolean);
    }

    function toRoleLabel(roleName) {
      const normalized = String(roleName || '').trim().toLowerCase();
      if (!normalized) {
        return 'Rol';
      }
      if (normalized === 'admin') {
        return 'Admin';
      }
      if (normalized === 'manager') {
        return 'Yonetici';
      }
      if (normalized === 'user') {
        return 'Kullanici';
      }
      return normalized.charAt(0).toUpperCase() + normalized.slice(1);
    }

    function collectKnownRoles() {
      const known = new Set(['user', 'manager', 'admin']);

      rolesCache.forEach((role) => {
        const name = String(role && role.name || '').trim().toLowerCase();
        if (name) {
          known.add(name);
        }
      });

      usersCache.forEach((user) => {
        const name = String(user && user.role || '').trim().toLowerCase();
        if (name) {
          known.add(name);
        }
      });

      const currentRole = getCurrentRole();
      if (currentRole) {
        known.add(currentRole);
      }

      return Array.from(known).sort((a, b) => a.localeCompare(b, 'tr'));
    }

    function populateUserRoleOptions(selectedRole = '') {
      if (!userRoleInputEl) {
        return;
      }

      const selected = String(selectedRole || userRoleInputEl.value || '').trim().toLowerCase();
      const roles = collectKnownRoles();

      userRoleInputEl.innerHTML = roles.map((roleName) => {
        const isSelected = selected ? roleName === selected : roleName === 'user';
        return `<option value="${escapeHtml(roleName)}"${isSelected ? ' selected' : ''}>${escapeHtml(toRoleLabel(roleName))}</option>`;
      }).join('');
    }

    function populateUserRoleFilterOptions() {
      if (!userRoleFilterEl) {
        return;
      }

      const selected = String(userRoleFilterEl.value || 'all').trim().toLowerCase();
      const roles = collectKnownRoles();
      const options = ['<option value="all">Tum Roller</option>'];

      roles.forEach((roleName) => {
        const isSelected = roleName === selected;
        options.push(`<option value="${escapeHtml(roleName)}"${isSelected ? ' selected' : ''}>${escapeHtml(toRoleLabel(roleName))}</option>`);
      });

      userRoleFilterEl.innerHTML = options.join('');
    }

    function renderRolePermissionsTable(permissionSeed = {}) {
      if (!rolePermissionsBodyEl) {
        return;
      }

      const modules = getPermissionModules();
      rolePermissionsBodyEl.innerHTML = modules.map((moduleName) => {
        const existing = permissionSeed[moduleName] || {};
        const label = PERMISSION_MODULE_LABELS[moduleName] || moduleName;
        return `<tr>
          <td><strong>${escapeHtml(label)}</strong><div class="muted-note">${escapeHtml(moduleName)}</div></td>
          <td><input class="role-perm-check" data-module="${escapeHtml(moduleName)}" data-action="view" type="checkbox"${existing.view ? ' checked' : ''} /></td>
          <td><input class="role-perm-check" data-module="${escapeHtml(moduleName)}" data-action="create" type="checkbox"${existing.create ? ' checked' : ''} /></td>
          <td><input class="role-perm-check" data-module="${escapeHtml(moduleName)}" data-action="update" type="checkbox"${existing.update ? ' checked' : ''} /></td>
          <td><input class="role-perm-check" data-module="${escapeHtml(moduleName)}" data-action="delete" type="checkbox"${existing.delete ? ' checked' : ''} /></td>
        </tr>`;
      }).join('');
    }

    function showToast(text, level = 'ok') {
      if (!toastStackEl || !text) {
        return;
      }

      const now = Date.now();
      const toastKey = `${level}:${String(text).trim()}`;
      if (toastKey === lastToastKey && now - lastToastAt < 900) {
        return;
      }
      lastToastKey = toastKey;
      lastToastAt = now;

      const toast = document.createElement('div');
      toast.className = level === 'bad' ? 'toast bad' : 'toast';
      toast.innerHTML = `
        <span class="toast-text">${escapeHtml(text)}</span>
        <div class="toast-bar"></div>
      `;

      toastStackEl.prepend(toast);
      window.setTimeout(() => {
        if (toast.parentElement) {
          toast.parentElement.removeChild(toast);
        }
      }, 3000);
    }

    function pushActivity(text, ok) {
      if (!customerActivityEl) {
        announce(text);
        return;
      }

      const item = document.createElement('li');
      item.className = `activity-item ${ok ? 'ok' : 'bad'}`;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      item.textContent = `[${hh}:${mm}:${ss}] ${text}`;
      customerActivityEl.prepend(item);

      while (customerActivityEl.children.length > 8) {
        customerActivityEl.removeChild(customerActivityEl.lastChild);
      }

      announce(text);
    }

    function normalizeDate(value) {
      if (!value) {
        return '';
      }

      return String(value).slice(0, 10);
    }

    function normalizeDateTime(value) {
      if (!value) {
        return '';
      }
      const d = new Date(value);
      if (isNaN(d.getTime())) {
        return String(value).slice(0, 16).replace('T', ' ');
      }
      const pad = (n) => String(n).padStart(2, '0');
      return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} - ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    function formatDisplayDate(value) {
      if (!value) return '';
      const d = new Date(value);
      if (isNaN(d.getTime())) return String(value).slice(0, 10);
      const pad = (n) => String(n).padStart(2, '0');
      return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
    }

    function formatCustomerType(value) {
      return value === 'housing' ? 'Konutlar' : 'Projeler';
    }

    function formatLatestCustomer(customer) {
      if (!customer) {
        return 'Henüz müşteri yok.';
      }

      const statusMap = {
        sold: 'Satıldı',
        optioned: 'Opsiyonlandı',
        available: 'Boş'
      };

      return [
        `Ad Soyad: ${customer.firstName} ${customer.lastName}`,
        `TC Kimlik No: ${customer.identityNumber}`,
        `Mail: ${customer.email}`,
        `Tip: ${formatCustomerType(customer.customerType)}`,
        `Proje: ${customer.projectName || '-'}`,
        `Daire: ${customer.unitLabel || '-'}`,
        `Durum: ${statusMap[customer.unitStatus] || '-'}`
      ].join('\n');
    }

    function closeConfirm(decision) {
      confirmOverlayEl.classList.remove('show');

      if (confirmResolver) {
        const resolve = confirmResolver;
        confirmResolver = null;
        resolve(decision);
      }

      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    function askConfirm({ title, text, acceptLabel }) {
      if (!confirmOverlayEl || !confirmTitleEl || !confirmTextEl || !confirmAcceptEl) {
        return Promise.resolve(window.confirm(text || 'Devam etmek istiyor musunuz?'));
      }

      confirmTitleEl.textContent = title || 'İşlem Onayı';
      confirmTextEl.textContent = text || 'Devam etmek istiyor musunuz?';
      confirmAcceptEl.textContent = acceptLabel || 'Onayla';
      confirmOverlayEl.classList.add('show');
      lastFocusedElement = document.activeElement;

      setTimeout(() => {
        confirmCancelEl.focus();
      }, 0);

      return new Promise((resolve) => {
        confirmResolver = resolve;
      });
    }

    async function confirmDelete(options) {
      try {
        return await askConfirm(options);
      } catch (error) {
        return window.confirm(options.text || 'Silme işlemini onaylıyor musunuz?');
      }
    }

    function openCustomerModal(mode, customer) {
      const requiredAction = mode === 'edit' ? 'update' : 'create';
      if (!hasPermission('customers', requiredAction)) {
        return;
      }

      if (!customerReferralSourcesCache.length) {
        loadCustomerReferralSources().catch(() => {});
      }

      customerModalMode = mode;
      editingCustomerId = customer ? customer.id : null;
      customerModalTitleEl.textContent = mode === 'edit' ? 'Müşteri Düzenle' : 'Müşteri Ekle';
      customerModalSubtitleEl.textContent = mode === 'edit'
        ? 'Müşteri bilgilerini güncelleyin ve proje - daire eşleştirmesini yönetin.'
        : 'Yeni müşteri oluşturun ve gerekiyorsa proje - daire bağlantısını seçin.';
      saveCustomerBtn.textContent = mode === 'edit' ? 'Değişiklikleri Kaydet' : 'Müşteri Kaydet';
      clearStatus(customerFormStatusEl);

      if (customer) {
        firstNameEl.value = customer.firstName || '';
        lastNameEl.value = customer.lastName || '';
        identityNumberEl.value = customer.identityNumber || '';
        birthDateEl.value = normalizeDate(customer.birthDate);
        occupationEl.value = customer.occupation || '';
        phonePrimaryEl.value = customer.phonePrimary || '';
        phoneSecondaryEl.value = customer.phoneSecondary || '';
        emailEl.value = customer.email || '';
        addressEl.value = customer.address || '';
        detailDescriptionEl.value = customer.detailDescription || '';
        referenceNameEl.value = customer.referenceName || '';
        renderReferralSourceOptions(customer.referralSource || '');
        populateProjectOptions(customer.projectId || '');
        renderUnitOptions(customer.projectId || '', customer.unitId || '');
        if (customer.unitId) {
          assignmentStatusEl.disabled = false;
          assignmentStatusEl.value = customer.unitStatus === 'sold' ? 'sold' : 'optioned';
        } else {
          assignmentStatusEl.disabled = true;
          assignmentStatusEl.value = '';
        }
      } else {
        customerFormEl.reset();
        referenceNameEl.value = '';
        renderReferralSourceOptions('');
        populateProjectOptions('');
        renderUnitOptions('', '');
        assignmentStatusEl.disabled = true;
        assignmentStatusEl.value = '';
      }

      setupCustomerFormValidation();
      customerModalEl.classList.add('show');
      lastFocusedElement = document.activeElement;
      setTimeout(() => firstNameEl.focus(), 0);
    }

    function closeCustomerModal() {
      customerModalEl.classList.remove('show');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    function populateProjectOptions(selectedProjectId) {
      const options = ['<option value="">Proje seçin</option>'];

      for (const project of inventoryState.projects) {
        const selected = String(project.id) === String(selectedProjectId) ? ' selected' : '';
        options.push(`<option value="${project.id}"${selected}>${escapeHtml(project.name)} (${project.availableUnits} boş / ${project.soldUnits} satıldı)</option>`);
      }

      projectIdEl.innerHTML = options.join('');
    }

    function renderUnitOptions(projectId, selectedUnitId) {
      if (!projectId) {
        unitIdEl.innerHTML = '<option value="">Önce proje seçin</option>';
        unitInventoryNoteEl.textContent = 'Önce proje seçin, ardından o projedeki uygun daireleri listeleyelim.';
        return;
      }

      const selectedId = selectedUnitId ? Number(selectedUnitId) : null;
      const units = inventoryState.units.filter((unit) => Number(unit.projectId) === Number(projectId));
      const options = ['<option value="">Daire seçin</option>'];
      let availableCount = 0;

      for (const unit of units) {
        const isAssignedToOther = unit.customerId && Number(unit.customerId) !== Number(editingCustomerId);
        if (isAssignedToOther && Number(unit.id) !== selectedId) {
          continue;
        }

        if (!isAssignedToOther) {
          availableCount += 1;
        }

        const selected = Number(unit.id) === selectedId ? ' selected' : '';
        const suffix = unit.saleStatus === 'sold' && Number(unit.id) === selectedId ? ' (Bu müşteriye bağlı)' : '';
        options.push(`<option value="${unit.id}"${selected}>${escapeHtml(unit.label)}${suffix}</option>`);
      }

      unitIdEl.innerHTML = options.join('');
      unitInventoryNoteEl.textContent = `${availableCount} uygun daire bulundu. Durumu Opsiyonlandı veya Satıldı olarak seçebilirsiniz.`;
    }

    function getCustomerPayload() {
      return {
        firstName: firstNameEl.value.trim(),
        lastName: lastNameEl.value.trim(),
        identityNumber: identityNumberEl.value.trim(),
        birthDate: birthDateEl.value,
        occupation: occupationEl.value.trim(),
        phonePrimary: phonePrimaryEl.value.trim(),
        phoneSecondary: phoneSecondaryEl.value.trim(),
        email: emailEl.value.trim(),
        address: addressEl.value.trim(),
        detailDescription: detailDescriptionEl.value.trim(),
        referenceName: referenceNameEl.value.trim(),
        referralSource: referralSourceEl.value.trim(),
        customerType: 'project',
        projectId: projectIdEl.value ? Number(projectIdEl.value) : null,
        unitId: unitIdEl.value ? Number(unitIdEl.value) : null,
        assignmentStatus: assignmentStatusEl.value
      };
    }

    function renderProjectInventory() {
      if (!inventoryState.projects.length) {
        projectInventoryEl.innerHTML = '<div class="project-chip">Henüz proje kaydı yok.</div>';
        return;
      }

      projectInventoryEl.innerHTML = inventoryState.projects.map((project) => {
        return `<div class="project-chip">
          <strong>${escapeHtml(project.name)}</strong>
          <div class="project-stock-row">
            <p class="stock-pill stock-available">${project.availableUnits} boş</p>
            <p class="stock-pill stock-optioned">${project.optionedUnits || 0} opsiyonlu</p>
            <p class="stock-pill stock-sold">${project.soldUnits} satılmış</p>
          </div>
        </div>`;
      }).join('');
    }

    function renderDashboardWidgets() {
      const projects = inventoryState.projects || [];
      const units = inventoryState.units || [];

      if (!projectStatusCardsEl) {
        return;
      }

      if (!projects.length) {
        projectStatusCardsEl.innerHTML = '<article class="card"><div class="label">Proje Stok Durumu</div><div class="muted-note" style="margin-top:8px">Proje bulunamadı.</div></article>';
        return;
      }

      projectStatusCardsEl.innerHTML = projects.map((project) => {
        const projectUnits = units.filter((unit) => Number(unit.projectId) === Number(project.id));
        const sold = projectUnits.filter((unit) => unit.saleStatus === 'sold').length;
        const optioned = projectUnits.filter((unit) => unit.saleStatus === 'optioned').length;
        const available = projectUnits.filter((unit) => unit.saleStatus === 'available').length;

        return `<article class="card">
          <div class="label">${escapeHtml(project.name)}</div>
          <table style="margin-top:8px;font-size:12px">
            <tbody>
              <tr><td>Satılan</td><td><strong>${sold}</strong></td></tr>
              <tr><td>Opsiyonlu</td><td><strong>${optioned}</strong></td></tr>
              <tr><td>Boş</td><td><strong>${available}</strong></td></tr>
            </tbody>
          </table>
        </article>`;
      }).join('');
    }

    function formatTicketStatus(status) {
      if (status === 'in_progress') return 'Islemde';
      if (status === 'closed') return 'Kapali';
      if (status === 'deleted') return 'Silinmis';
      return 'Acik';
    }

    function renderSupportTagOptions() {
      if (!supportTagEl) {
        return;
      }

      const options = ['<option value="">Etiket secin</option>'];
      for (const tag of supportTagsCache) {
        options.push(`<option value="${tag.id}">${escapeHtml(tag.name)}</option>`);
      }
      supportTagEl.innerHTML = options.join('');
    }

    function renderReferralSourceOptions(selectedValue = '') {
      if (!referralSourceEl) {
        return;
      }

      const selectedText = String(selectedValue || '').trim();
      const items = customerReferralSourcesCache.slice();
      if (selectedText && !items.some((item) => item === selectedText)) {
        items.unshift(selectedText);
      }

      const options = ['<option value="">Kaynak secin</option>'];
      for (const source of items) {
        const selected = source === selectedText ? ' selected' : '';
        options.push(`<option value="${escapeHtml(source)}"${selected}>${escapeHtml(source)}</option>`);
      }
      referralSourceEl.innerHTML = options.join('');
    }

    function renderTagsList() {
      if (!tagsListEl) {
        return;
      }

      if (!supportTagsCache.length) {
        tagsListEl.innerHTML = '<li class="activity-item">Henuz etiket tanimlanmamis.</li>';
        return;
      }

      tagsListEl.innerHTML = supportTagsCache.map((tag) => {
        return `<li class="activity-item" style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <span>${escapeHtml(tag.name)}</span>
          <button class="danger-btn" data-action="delete-tag" data-tag-id="${tag.id}" type="button">Sil</button>
        </li>`;
      }).join('');
    }

    function renderReferencesList() {
      if (!referencesListEl) {
        return;
      }

      if (!customerReferralSourcesCache.length) {
        referencesListEl.innerHTML = '<li class="activity-item">Henuz kaynak tanimlanmamis.</li>';
        return;
      }

      referencesListEl.innerHTML = customerReferralSourcesCache.map((name, index) => {
        return `<li class="activity-item" style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <span>${escapeHtml(name)}</span>
          <button class="danger-btn" data-action="delete-reference-source" data-reference-index="${index}" type="button">Sil</button>
        </li>`;
      }).join('');
    }

    function renderOpenTickets() {
      if (!openTicketsBodyEl) {
        return;
      }

      const openTickets = supportTicketsCache
        .filter((ticket) => ticket.status === 'open' || ticket.status === 'in_progress')
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 10);

      // Update summary counts
      const summaryEl = document.getElementById('openTicketsSummary');
      if (summaryEl) {
        const openCount = supportTicketsCache.filter((t) => t.status === 'open').length;
        const inProgressCount = supportTicketsCache.filter((t) => t.status === 'in_progress').length;
        summaryEl.innerHTML = `
          <span class="tag ticket-open">Açık: ${openCount}</span>
          <span class="tag ticket-in-progress">İşlemde: ${inProgressCount}</span>
        `;
      }
      if (!openTickets.length) {
        openTicketsBodyEl.innerHTML = '<tr><td colspan="5">Acik veya islemdeki ticket bulunmuyor.</td></tr>';
        return;
      }

      openTicketsBodyEl.innerHTML = openTickets.map((ticket) => {
        const statusTagClassMap = { open: 'ticket-open', in_progress: 'ticket-in-progress' };
        const tagClass = statusTagClassMap[ticket.status] || '';
        const descriptionInline = ticket.description
          ? `<div class="ticket-short-description" style="margin-top:4px;"><strong>Kısa Açıklama:</strong> ${escapeHtml(ticket.description.length > 120 ? ticket.description.substring(0, 120) + '...' : ticket.description)}</div>`
          : '';
        const separatorRow = `<tr><td colspan="5" style="padding:0;height:4px;background:linear-gradient(90deg,var(--accent),var(--accent-2),transparent);opacity:0.35;border:none;"></td></tr>`;
        return `<tr>
          <td>
            ${escapeHtml(ticket.fullName)}
            ${descriptionInline}
          </td>
          <td>${escapeHtml(ticket.tagName || '-')}</td>
          <td><span class="tag ${tagClass}">${escapeHtml(formatTicketStatus(ticket.status))}</span></td>
          <td>${escapeHtml(ticket.phone)}<div class="muted-note">${escapeHtml(ticket.email)}</div></td>
          <td>${escapeHtml(formatDisplayDate(ticket.createdAt))}</td>
        </tr>
        ${separatorRow}`;
      }).join('');
    }

    function resetSupportTicketForm() {
      if (!supportTicketFormEl) {
        return;
      }

      supportTicketFormEl.reset();
      if (supportTicketStatusEl) {
        supportTicketStatusEl.value = 'open';
      }
      supportTicketModalMode = 'create';
      editingSupportTicketId = null;
      clearStatus(supportFormStatusEl);
    }

    function openSupportTicketModal(mode = 'create', ticket = null) {
      if (!supportTicketModalEl) {
        return;
      }

      supportTicketModalMode = mode;
      editingSupportTicketId = ticket && ticket.id ? Number(ticket.id) : null;

      if (mode === 'edit' && ticket) {
        supportFullNameEl.value = ticket.fullName || '';
        supportPhoneEl.value = ticket.phone || '';
        supportEmailEl.value = ticket.email || '';
        supportDescriptionEl.value = ticket.description || '';
        supportTagEl.value = ticket.tagId ? String(ticket.tagId) : '';
        supportTicketStatusEl.value = ticket.status || 'open';
      } else {
        resetSupportTicketForm();
      }

      if (saveSupportTicketBtn) {
        saveSupportTicketBtn.textContent = mode === 'edit' ? 'Duzenle' : 'Kaydet';
      }

      supportTicketModalEl.classList.add('show');
      supportTicketModalEl.setAttribute('aria-hidden', 'false');
    }

    function closeSupportTicketModal() {
      if (!supportTicketModalEl) {
        return;
      }

      supportTicketModalEl.classList.remove('show');
      supportTicketModalEl.setAttribute('aria-hidden', 'true');
      resetSupportTicketForm();
    }

    function closeSupportNotesModal() {
      if (!supportNotesModalEl) {
        return;
      }

      supportNotesModalEl.classList.remove('show');
      supportNotesModalEl.setAttribute('aria-hidden', 'true');
      supportNotesTicketId = null;
      if (supportNotesListEl) {
        supportNotesListEl.innerHTML = '';
      }
      if (supportTicketAttachmentsBoxEl) {
        supportTicketAttachmentsBoxEl.innerHTML = '';
      }
      clearStatus(supportNotesStatusEl);
    }

    function getSupportPayload() {
      return {
        fullName: supportFullNameEl.value.trim(),
        phone: supportPhoneEl.value.trim(),
        email: supportEmailEl.value.trim(),
        description: supportDescriptionEl.value.trim(),
        tagId: supportTagEl.value ? Number(supportTagEl.value) : null,
        status: supportTicketStatusEl.value || 'open'
      };
    }

    function buildSupportTicketFormData(payload, files) {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          formData.append(key, String(value));
        }
      });

      if (files && files.length) {
        Array.from(files).forEach((file) => {
          formData.append('attachments', file);
        });
      }

      return formData;
    }

    function renderSupportTicketsTable() {
      if (!supportTicketsBodyEl) {
        return;
      }

      const canUpdateSupport = hasPermission('support', 'update');
      const canDeleteSupport = hasPermission('support', 'delete');

      const search = (supportSearchEl?.value || '').trim().toLowerCase();
      const filtered = supportTicketsCache.filter((ticket) => {
        const haystack = [ticket.fullName, ticket.email, ticket.phone, ticket.description, ticket.tagName].join(' ').toLowerCase();
        return !search || haystack.includes(search);
      });

      const STATUS_ORDER = { open: 0, in_progress: 1, closed: 2, deleted: 3 };
      filtered.sort((a, b) => {
        const groupDiff = (STATUS_ORDER[a.status] ?? 99) - (STATUS_ORDER[b.status] ?? 99);
        if (groupDiff !== 0) return groupDiff;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      if (!filtered.length) {
        supportTicketsBodyEl.innerHTML = '<tr><td colspan="4">Kriterlere uygun ticket bulunamadi.</td></tr>';
        return;
      }

      const pagination = paginateItems(filtered, supportCurrentPage);
      supportCurrentPage = pagination.currentPage;
      const pageItems = pagination.pageItems;
      const totalPages = pagination.totalPages;

      let html = pageItems.map((ticket) => {
        const statusTagClassMap = { open: 'ticket-open', in_progress: 'ticket-in-progress', closed: 'ticket-closed', deleted: 'ticket-deleted' };
        const tagClass = statusTagClassMap[ticket.status] || '';

        const actionButtons = [];
        actionButtons.push(`<button data-action="open-notes" data-ticket-id="${ticket.id}" type="button" class="ghost-btn action-btn-sm">Notlar (${Number(ticket.noteCount || 0)})</button>`);
        if (canUpdateSupport && ticket.status !== 'deleted') {
          actionButtons.push(`<button data-action="edit-ticket" data-ticket-id="${ticket.id}" type="button" class="action-btn-sm">Duzenle</button>`);
        }
        if (canDeleteSupport && ticket.status !== 'deleted') {
          actionButtons.push(`<button data-action="delete-ticket" data-ticket-id="${ticket.id}" type="button" class="danger-btn action-btn-sm">Sil</button>`);
        }

        const deletedReasonHtml = ticket.deletedReason ? `<div class="muted-note" style="margin-top:4px;color:#b45309;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Silme: ${escapeHtml(ticket.deletedReason.substring(0, 40))}...</div>` : '';

        const descriptionInline = ticket.description
          ? `<div class="ticket-short-description" style="margin-top:4px;"><strong>Kısa Açıklama:</strong> ${escapeHtml(ticket.description.length > 120 ? ticket.description.substring(0, 120) + '...' : ticket.description)}</div>`
          : '';

        const separatorRow = `<tr><td colspan="4" style="padding:0;height:4px;background:linear-gradient(90deg,var(--accent),var(--accent-2),transparent);opacity:0.35;border:none;"></td></tr>`;

        return `<tr>
          <td>
            <strong>${escapeHtml(ticket.fullName)}</strong>
            <div class="muted-note">${escapeHtml(ticket.phone)}</div>
            <div class="muted-note">${escapeHtml(normalizeDateTime(ticket.createdAt))}</div>
            ${descriptionInline}
            ${deletedReasonHtml}
          </td>
          <td>${escapeHtml(ticket.tagName || '-')}</td>
          <td><span class="tag ${tagClass}">${escapeHtml(formatTicketStatus(ticket.status))}</span></td>
          <td style="display:flex;gap:6px;flex-wrap:wrap">${actionButtons.join('')}</td>
        </tr>
        ${separatorRow}`;
      }).join('');

      if (totalPages > 1) {
        html += `<tr><td colspan="4" style="text-align:center;padding:12px;border-top:1px solid var(--line);">${renderPaginationButtons(totalPages, supportCurrentPage, 'support-pagination-btn')}</td></tr>`;
      }

      supportTicketsBodyEl.innerHTML = html;
    }

    async function loadSupportTags() {
      if (!hasPermission('support', 'view')) {
        supportTagsCache = [];
        renderSupportTagOptions();
        if (tagsListEl) {
          tagsListEl.innerHTML = '<li class="activity-item">Etiketleri goruntuleme yetkiniz yok.</li>';
        }
        return;
      }

      try {
        const data = await api('/api/support/tags');
        supportTagsCache = data.tags || [];
        renderSupportTagOptions();
        renderTagsList();
      } catch (error) {
        if (tagsStatusEl) {
          setStatus(tagsStatusEl, 'bad', error.message);
        }
      }
    }

    async function loadCustomerReferralSources() {
      if (!hasPermission('settings', 'view')) {
        customerReferralSourcesCache = [];
        renderReferralSourceOptions('');
        if (referencesListEl) {
          referencesListEl.innerHTML = '<li class="activity-item">Kaynaklari goruntuleme yetkiniz yok.</li>';
        }
        return;
      }

      try {
        const data = await api('/api/settings/references');
        customerReferralSourcesCache = Array.isArray(data.references) ? data.references : [];
        renderReferralSourceOptions(referralSourceEl ? referralSourceEl.value : '');
        renderReferencesList();
      } catch (error) {
        setStatus(referencesStatusEl, 'bad', error.message);
      }
    }

    async function loadSmtpSettings() {
      if (!smtpSettingsFormEl) {
        return;
      }

      clearStatus(smtpSettingsStatusEl);

      try {
        const data = await api('/api/settings/smtp');
        const smtp = data.smtp || {};
        smtpHostEl.value = smtp.host || '';
        smtpPortEl.value = Number(smtp.port || 587);
        smtpUserEl.value = smtp.user || '';
        smtpFromEl.value = smtp.from || '';
        smtpPassEl.value = '';
        smtpUseSecureEl.checked = Boolean(smtp.useSecure);
      } catch (error) {
        setStatus(smtpSettingsStatusEl, 'bad', error.message);
      }
    }

    async function saveSmtpSettings(event) {
      event.preventDefault();

      if (!hasPermission('settings', 'update') && !hasPermission('settings', 'create')) {
        setStatus(smtpSettingsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }

      clearStatus(smtpSettingsStatusEl);

      const payload = {
        host: smtpHostEl.value.trim(),
        port: Number(smtpPortEl.value),
        user: smtpUserEl.value.trim(),
        from: smtpFromEl.value.trim(),
        pass: smtpPassEl.value,
        useSecure: Boolean(smtpUseSecureEl.checked)
      };

      if (!payload.host || !payload.user || !payload.from || !Number.isFinite(payload.port) || payload.port <= 0) {
        setStatus(smtpSettingsStatusEl, 'bad', 'Host, port, kullanıcı ve gönderen alanlarını doldurun');
        return;
      }

      saveSmtpSettingsBtn.disabled = true;
      const oldText = saveSmtpSettingsBtn.textContent;
      saveSmtpSettingsBtn.textContent = 'Kaydediliyor...';

      try {
        const data = await api('/api/settings/smtp', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        smtpPassEl.value = '';
        setStatus(smtpSettingsStatusEl, 'ok', data.message || 'SMTP ayarları kaydedildi');
      } catch (error) {
        setStatus(smtpSettingsStatusEl, 'bad', error.message);
      } finally {
        saveSmtpSettingsBtn.disabled = false;
        saveSmtpSettingsBtn.textContent = oldText;
      }
    }

    async function loadSupportTickets() {
      supportCurrentPage = 1;
      if (!hasPermission('support', 'view')) {
        if (supportTicketsBodyEl) {
          supportTicketsBodyEl.innerHTML = '<tr><td colspan="5">Bu bolumu goruntuleme yetkiniz yok.</td></tr>';
        }
        return;
      }

      if (supportTicketsBodyEl) {
        supportTicketsBodyEl.innerHTML = '<tr><td colspan="5">Yukleniyor...</td></tr>';
      }

      try {
        const selectedStatus = supportStatusFilterEl?.value || 'open';
        const data = await api(`/api/support/tickets?status=${encodeURIComponent(selectedStatus)}`);
        supportTicketsCache = data.tickets || [];
        renderSupportTicketsTable();
        renderOpenTickets();
      } catch (error) {
        if (supportTicketsStatusEl) {
          setStatus(supportTicketsStatusEl, 'bad', error.message);
        }
      }
    }

    async function loadOpenTickets() {
      if (!hasPermission('support', 'view')) {
        if (openTicketsBodyEl) {
          openTicketsBodyEl.innerHTML = '<tr><td colspan="5">Bu bolumu goruntuleme yetkiniz yok.</td></tr>';
        }
        return;
      }

      if (openTicketsBodyEl) {
        openTicketsBodyEl.innerHTML = '<tr><td colspan="5">Yukleniyor...</td></tr>';
      }

      try {
        const data = await api('/api/support/tickets/open');
        const openTickets = data.tickets || [];
        supportTicketsCache = supportTicketsCache.filter((item) => item.status !== 'open' && item.status !== 'in_progress').concat(openTickets);
        clearStatus(openTicketsStatusEl);
        renderOpenTickets();
      } catch (error) {
        if (openTicketsStatusEl) {
          setStatus(openTicketsStatusEl, 'bad', error.message);
        }
      }
    }

    async function submitSupportTicket(event) {
      event.preventDefault();

      const permissionNeeded = supportTicketModalMode === 'edit' ? 'update' : 'create';
      if (!hasPermission('support', permissionNeeded)) {
        setStatus(supportFormStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }

      clearStatus(supportFormStatusEl);
      const payload = getSupportPayload();
      const files = supportAttachmentsEl?.files || [];

      saveSupportTicketBtn.disabled = true;
      const oldText = saveSupportTicketBtn.textContent;
      saveSupportTicketBtn.textContent = 'Kaydediliyor...';

      try {
        const endpoint = supportTicketModalMode === 'edit' && editingSupportTicketId
          ? `/api/support/tickets/${editingSupportTicketId}`
          : '/api/support/tickets';
        const method = supportTicketModalMode === 'edit' ? 'PATCH' : 'POST';

        const data = await api(endpoint, {
          method,
          body: buildSupportTicketFormData(payload, files)
        });

        setStatus(supportTicketsStatusEl, 'ok', data.message || 'Ticket kaydedildi');
        closeSupportTicketModal();
        await Promise.all([loadSupportTickets(), loadOpenTickets()]);
      } catch (error) {
        setStatus(supportFormStatusEl, 'bad', error.message);
      } finally {
        saveSupportTicketBtn.disabled = false;
        saveSupportTicketBtn.textContent = oldText;
      }
    }

    async function editSupportTicket(ticketId) {
      if (!hasPermission('support', 'update')) {
        setStatus(supportTicketsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }

      const ticket = supportTicketsCache.find((item) => Number(item.id) === Number(ticketId));
      if (!ticket) {
        setStatus(supportTicketsStatusEl, 'bad', 'Ticket bulunamadi');
        return;
      }

      openSupportTicketModal('edit', ticket);
    }

    async function deleteSupportTicket(ticketId) {
      if (!hasPermission('support', 'delete')) {
        setStatus(supportTicketsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }

      const reason = window.prompt('Silme nedenini yaziniz:');
      if (!reason || !reason.trim()) {
        setStatus(supportTicketsStatusEl, 'bad', 'Silme nedeni zorunludur');
        return;
      }

      try {
        const data = await api(`/api/support/tickets/${ticketId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reason: reason.trim() })
        });
        setStatus(supportTicketsStatusEl, 'ok', data.message || 'Ticket silindi');
        await Promise.all([loadSupportTickets(), loadOpenTickets()]);
      } catch (error) {
        setStatus(supportTicketsStatusEl, 'bad', error.message);
      }
    }

    function renderSupportAttachments(items) {
      if (!supportTicketAttachmentsBoxEl) {
        return;
      }

      if (!items || !items.length) {
        supportTicketAttachmentsBoxEl.innerHTML = '<div class="activity-item">Ticket seviyesinde ek dosya yok.</div>';
        return;
      }

      supportTicketAttachmentsBoxEl.innerHTML = items.map((item) => {
        return `<div class="activity-item"><a href="${escapeHtml(item.downloadPath || '#')}" target="_blank" rel="noopener">${escapeHtml(item.fileName || 'Dosya')}</a></div>`;
      }).join('');
    }

    function renderSupportNotes(items) {
      if (!supportNotesListEl) {
        return;
      }

      if (!items || !items.length) {
        supportNotesListEl.innerHTML = '<div class="activity-item">Henuz not eklenmemis.</div>';
        return;
      }

      supportNotesListEl.innerHTML = items.map((note) => {
        let attachmentsHtml = '';
        if (Array.isArray(note.attachments) && note.attachments.length) {
          const boxes = note.attachments.map((item) => {
            const isImage = /\.(jpe?g|png|gif|webp)$/i.test(item.originalName || item.fileName || '');
            const href = escapeHtml(item.webPath || item.downloadPath || '#');
            const label = escapeHtml(item.originalName || item.fileName || 'Dosya');
            if (isImage) {
              return `<a href="${href}" target="_blank" rel="noopener" class="note-attachment-thumb" title="${label}"><img src="${href}" alt="${label}" /></a>`;
            }
            return `<a href="${href}" target="_blank" rel="noopener" class="note-attachment-thumb note-attachment-file" title="${label}"><span>${label}</span></a>`;
          }).join('');
          attachmentsHtml = `<div class="note-attachments">${boxes}</div>`;
        }

        return `<div class="activity-item" style="display:block">
          <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
            <strong>${escapeHtml(note.createdByName || note.createdByEmail || 'sistem')}</strong>
            <span class="muted-note">${escapeHtml(normalizeDateTime(note.createdAt))}</span>
          </div>
          <div style="margin-top:6px">${escapeHtml(note.noteText || '')}</div>
          ${attachmentsHtml}
        </div>`;
      }).join('');
    }

    async function openSupportNotes(ticketId) {
      if (!hasPermission('support', 'view')) {
        setStatus(supportTicketsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }

      supportNotesTicketId = Number(ticketId);
      clearStatus(supportNotesStatusEl);
      if (supportNotesListEl) {
        supportNotesListEl.innerHTML = '<div class="activity-item">Yukleniyor...</div>';
      }

      try {
        const data = await api(`/api/support/tickets/${ticketId}/notes`);
        const ticket = data.ticket || null;

        if (supportNotesTicketMetaEl && ticket) {
          supportNotesTicketMetaEl.innerHTML = `<strong>${escapeHtml(ticket.fullName || '')}</strong> | ${escapeHtml(ticket.phone || '')} | ${escapeHtml(formatTicketStatus(ticket.status || 'open'))}`;
        }

        renderSupportAttachments(data.ticketAttachments || []);
        renderSupportNotes(data.notes || []);

        supportNotesModalEl.classList.add('show');
        supportNotesModalEl.setAttribute('aria-hidden', 'false');
      } catch (error) {
        setStatus(supportTicketsStatusEl, 'bad', error.message);
      }
    }

    async function submitSupportNote(event) {
      event.preventDefault();

      if (!hasPermission('support', 'update')) {
        setStatus(supportNotesStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }

      if (!supportNotesTicketId) {
        setStatus(supportNotesStatusEl, 'bad', 'Ticket secimi gecersiz');
        return;
      }

      const text = (supportNoteTextEl?.value || '').trim();
      const files = supportNoteAttachmentsEl?.files || [];

      if (!text && !files.length) {
        setStatus(supportNotesStatusEl, 'bad', 'Not metni veya ek dosya zorunludur');
        return;
      }

      clearStatus(supportNotesStatusEl);
      saveSupportNoteBtn.disabled = true;
      const oldText = saveSupportNoteBtn.textContent;
      saveSupportNoteBtn.textContent = 'Gonderiliyor...';

      try {
        const formData = new FormData();
        if (text) {
          formData.append('noteText', text);
        }
        Array.from(files).forEach((file) => formData.append('attachments', file));

        const data = await api(`/api/support/tickets/${supportNotesTicketId}/notes`, {
          method: 'POST',
          body: formData
        });

        if (supportNoteFormEl) {
          supportNoteFormEl.reset();
        }

        setStatus(supportNotesStatusEl, 'ok', data.message || 'Not eklendi');
        await Promise.all([openSupportNotes(supportNotesTicketId), loadSupportTickets(), loadOpenTickets()]);
      } catch (error) {
        setStatus(supportNotesStatusEl, 'bad', error.message);
      } finally {
        saveSupportNoteBtn.disabled = false;
        saveSupportNoteBtn.textContent = oldText;
      }
    }

    async function createSupportTag() {
      if (!hasPermission('support', 'update')) {
        setStatus(tagsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      clearStatus(tagsStatusEl);
      const name = (tagNameInputEl.value || '').trim();
      if (!name) {
        setStatus(tagsStatusEl, 'bad', 'Etiket adi bos olamaz.');
        return;
      }

      try {
        const data = await api('/api/support/tags', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name })
        });
        tagNameInputEl.value = '';
        await loadSupportTags();
        setStatus(tagsStatusEl, 'ok', data.message || 'Etiket eklendi');
      } catch (error) {
        setStatus(tagsStatusEl, 'bad', error.message);
      }
    }

    async function saveCustomerReferralSources(nextItems, successMessage) {
      if (!hasPermission('settings', 'update') && !hasPermission('settings', 'create')) {
        setStatus(referencesStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return false;
      }

      try {
        const data = await api('/api/settings/references', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ references: nextItems })
        });

        customerReferralSourcesCache = Array.isArray(data.references) ? data.references : nextItems;
        renderReferencesList();
        renderReferralSourceOptions(referralSourceEl ? referralSourceEl.value : '');
        setStatus(referencesStatusEl, 'ok', successMessage || data.message || 'Kaynak listesi guncellendi');
        return true;
      } catch (error) {
        setStatus(referencesStatusEl, 'bad', error.message);
        return false;
      }
    }

    async function createReferenceSource() {
      clearStatus(referencesStatusEl);
      const value = String(referenceSourceInputEl ? referenceSourceInputEl.value : '').trim().slice(0, 80);
      if (!value) {
        setStatus(referencesStatusEl, 'bad', 'Kaynak adi bos olamaz.');
        return;
      }

      const exists = customerReferralSourcesCache.some((item) => item.toLowerCase() === value.toLowerCase());
      if (exists) {
        setStatus(referencesStatusEl, 'bad', 'Bu kaynak zaten listede var.');
        return;
      }

      const nextItems = [...customerReferralSourcesCache, value];
      const ok = await saveCustomerReferralSources(nextItems, 'Kaynak eklendi');
      if (ok && referenceSourceInputEl) {
        referenceSourceInputEl.value = '';
      }
    }

    async function deleteReferenceSource(index) {
      if (!Number.isInteger(index) || index < 0 || index >= customerReferralSourcesCache.length) {
        return;
      }

      const sourceName = customerReferralSourcesCache[index];
      const confirmed = await confirmDelete({
        title: 'Kaynak Silme Onayi',
        text: `"${sourceName}" kaynagi kaldirilsin mi?`,
        acceptLabel: 'Sil'
      });

      if (!confirmed) {
        return;
      }

      const nextItems = customerReferralSourcesCache.filter((_, itemIndex) => itemIndex !== index);
      await saveCustomerReferralSources(nextItems, 'Kaynak silindi');
    }

    async function deleteSupportTag(tagId) {
      if (!hasPermission('support', 'delete')) {
        setStatus(tagsStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      const tag = supportTagsCache.find((item) => item.id === tagId);
      if (!tag) {
        return;
      }

      const confirmed = await confirmDelete({
        title: 'Etiket Silme Onayi',
        text: `"${tag.name}" etiketi silinsin mi?`,
        acceptLabel: 'Sil'
      });

      if (!confirmed) {
        return;
      }

      try {
        const data = await api(`/api/support/tags/${tagId}`, { method: 'DELETE' });
        await loadSupportTags();
        setStatus(tagsStatusEl, 'warn', data.message || 'Etiket silindi');
      } catch (error) {
        setStatus(tagsStatusEl, 'bad', error.message);
      }
    }

    function pushProjectActivity(text, ok) {
      if (!projectActivityEl) {
        announce(text);
        return;
      }

      const item = document.createElement('li');
      item.className = `activity-item ${ok ? 'ok' : 'bad'}`;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      item.textContent = `[${hh}:${mm}:${ss}] ${text}`;
      projectActivityEl.prepend(item);
      while (projectActivityEl.children.length > 8) {
        projectActivityEl.removeChild(projectActivityEl.lastChild);
      }
      announce(text);
    }

    function pushUnitActivity(text, ok) {
      if (!unitActivityEl) {
        announce(text);
        return;
      }

      const item = document.createElement('li');
      item.className = `activity-item ${ok ? 'ok' : 'bad'}`;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      item.textContent = `[${hh}:${mm}:${ss}] ${text}`;
      unitActivityEl.prepend(item);
      while (unitActivityEl.children.length > 8) {
        unitActivityEl.removeChild(unitActivityEl.lastChild);
      }
      announce(text);
    }

    function populateUnitProjectFilter() {
      const current = unitProjectFilterEl.value;
      const options = ['<option value="all">Tüm Projeler</option>'];
      for (const p of inventoryState.projects) {
        const sel = String(p.id) === current ? ' selected' : '';
        options.push(`<option value="${p.id}"${sel}>${escapeHtml(p.name)}</option>`);
      }
      unitProjectFilterEl.innerHTML = options.join('');
    }

    function populateUnitModalProjectSelect(selectedId) {
      const options = ['<option value="">Proje seçin</option>'];
      for (const p of inventoryState.projects) {
        const sel = String(p.id) === String(selectedId) ? ' selected' : '';
        options.push(`<option value="${p.id}"${sel}>${escapeHtml(p.name)}</option>`);
      }
      unitProjectSelectEl.innerHTML = options.join('');
    }

    function renderProjectsTable() {
      const canUpdateProjects = hasPermission('projects', 'update');
      const canDeleteProjects = hasPermission('projects', 'delete');
      const searchText = projectSearchEl.value.trim().toLowerCase();
      const filtered = projectsCache.filter((p) => !searchText || p.name.toLowerCase().includes(searchText));

      if (!filtered.length) {
        projectsBodyEl.innerHTML = '<tr><td colspan="6">Arama kriterine uygun proje bulunamadı.</td></tr>';
        return;
      }

      const pagination = paginateItems(filtered, projectsCurrentPage);
      projectsCurrentPage = pagination.currentPage;
      const pageItems = pagination.pageItems;
      const totalPages = pagination.totalPages;

      let html = pageItems.map((p) => {
        return `<tr>
          <td><strong>${escapeHtml(p.name)}</strong></td>
          <td>${p.totalUnits ?? 0}</td>
          <td>${p.availableUnits ?? 0}</td>
          <td>${p.soldUnits ?? 0}</td>
          <td>${p.customerCount ?? 0}</td>
          ${canUpdateProjects || canDeleteProjects
            ? `<td>
            <div class="inline-actions">
              <button class="ghost-btn" data-action="edit" data-project-id="${p.id}" type="button"${canUpdateProjects ? '' : ' disabled title="Duzenleme yetkiniz yok"'}>Düzenle</button>
              <button class="danger-btn" data-action="delete" data-project-id="${p.id}" type="button"${canDeleteProjects ? '' : ' disabled title="Silme yetkiniz yok"'}>Sil</button>
            </div>
          </td>`
            : getReadOnlyCell()}
        </tr>`;
      }).join('');

      if (totalPages > 1) {
        html += `<tr><td colspan="6" style="text-align:center;padding:12px;border-top:1px solid var(--line);">${renderPaginationButtons(totalPages, projectsCurrentPage, 'projects-pagination-btn')}</td></tr>`;
      }

      projectsBodyEl.innerHTML = html;
    }

    function renderUnitsTable() {
      const canUpdateUnits = hasPermission('units', 'update');
      const canDeleteUnits = hasPermission('units', 'delete');
      const searchText = unitSearchEl.value.trim().toLowerCase();
      const projectFilter = unitProjectFilterEl.value;
      const statusFilter = unitStatusFilterEl.value;

      const filtered = unitsCache.filter((u) => {
        const matchesProject = projectFilter === 'all' ? true : String(u.projectId) === projectFilter;
        const matchesStatus = statusFilter === 'all' ? true : u.saleStatus === statusFilter;
        const haystack = [u.label, u.projectName, u.customerFirstName, u.customerLastName].join(' ').toLowerCase();
        return matchesProject && matchesStatus && (!searchText || haystack.includes(searchText));
      });

      if (!filtered.length) {
        unitsBodyEl.innerHTML = '<tr><td colspan="5">Arama kriterine uygun daire bulunamadı.</td></tr>';
        return;
      }

      const pagination = paginateItems(filtered, unitsCurrentPage);
      unitsCurrentPage = pagination.currentPage;
      const pageItems = pagination.pageItems;
      const totalPages = pagination.totalPages;

      let html = pageItems.map((u) => {
        const customerName = (u.customerFirstName || u.customerLastName)
          ? `${u.customerFirstName || ''} ${u.customerLastName || ''}`.trim()
          : '-';
        const statusTag = u.saleStatus === 'sold'
          ? '<span class="tag" style="background:#fee2e2;color:#7f1d1d">Satıldı</span>'
          : u.saleStatus === 'optioned'
            ? '<span class="tag optioned">Opsiyonlandı</span>'
            : '<span class="tag" style="background:#dcfce7;color:#14532d">Boş</span>';
        const canEdit = !u.customerId;
        const actionCell = (canUpdateUnits || canDeleteUnits)
          ? `<div class="inline-actions">
              <button class="ghost-btn" data-action="edit" data-unit-id="${u.id}" type="button"${canUpdateUnits && canEdit ? '' : (canEdit ? ' disabled title="Duzenleme yetkiniz yok"' : ' disabled title="Satilmis daire duzenlenemez"')}>Düzenle</button>
              <button class="danger-btn" data-action="delete" data-unit-id="${u.id}" type="button"${canDeleteUnits && canEdit ? '' : (canEdit ? ' disabled title="Silme yetkiniz yok"' : ' disabled title="Satilmis daire kaldirilamaz"')}>Sil</button>
            </div>`
          : '<span class="muted-note">Görüntüleme</span>';
        return `<tr>
          <td>${escapeHtml(u.projectName || '-')}</td>
          <td><strong>${escapeHtml(u.label)}</strong></td>
          <td>${statusTag}</td>
          <td>${escapeHtml(customerName)}</td>
          <td>${actionCell}</td>
        </tr>`;
      }).join('');

      if (totalPages > 1) {
        html += `<tr><td colspan="5" style="text-align:center;padding:12px;border-top:1px solid var(--line);">${renderPaginationButtons(totalPages, unitsCurrentPage, 'units-pagination-btn')}</td></tr>`;
      }

      unitsBodyEl.innerHTML = html;
    }

    function formatUserRole(role) {
      const normalizedRole = String(role || '').trim().toLowerCase();

      if (normalizedRole === 'admin') {
        return '<span class="tag" style="background:#ffedd5;color:#9a3412">Admin</span>';
      }

      if (normalizedRole === 'manager') {
        return '<span class="tag" style="background:#dcfce7;color:#14532d">Yönetici</span>';
      }

      if (normalizedRole === 'user') {
        return '<span class="tag" style="background:#e0f2fe;color:#075985">Kullanıcı</span>';
      }

      return `<span class="tag" style="background:#f1f5f9;color:#0f172a">${escapeHtml(toRoleLabel(normalizedRole))}</span>`;
    }

    function getFilteredUsers() {
      const searchText = (userSearchEl?.value || '').trim().toLowerCase();
      const roleFilter = (userRoleFilterEl?.value || 'all').toLowerCase();

      return usersCache.filter((user) => {
        const matchesRole = roleFilter === 'all' ? true : String(user.role || '').toLowerCase() === roleFilter;
        const haystack = [user.name, user.email, user.phone, user.role].join(' ').toLowerCase();
        return matchesRole && (!searchText || haystack.includes(searchText));
      });
    }

    function renderUsersTable() {
      if (!usersBodyEl) {
        return;
      }

      const canUpdateUsers = hasPermission('users', 'update');
      const canDeleteUsers = hasPermission('users', 'delete');

      const filtered = getFilteredUsers();

      if (!filtered.length) {
        usersBodyEl.innerHTML = '<tr><td colspan="5">Arama kriterine uygun kullanıcı bulunamadı.</td></tr>';
        return;
      }

      const pagination = paginateItems(filtered, usersCurrentPage);
      usersCurrentPage = pagination.currentPage;
      const pageItems = pagination.pageItems;
      const totalPages = pagination.totalPages;

      let html = pageItems.map((user) => {
        const isCurrentUser = currentUser && Number(currentUser.userId) === Number(user.id);
        const isAdminRow = String(user.role || '').trim().toLowerCase() === 'admin';

        let actionCell = '<span class="muted-note">Görüntüleme</span>';
        if (canUpdateUsers || canDeleteUsers) {
          actionCell = `<div class="inline-actions">
              <button class="ghost-btn" data-action="edit" data-user-id="${user.id}" type="button"${canUpdateUsers ? '' : ' disabled title="Duzenleme yetkiniz yok"'}>Düzenle</button>
              <button class="danger-btn" data-action="delete" data-user-id="${user.id}" type="button"${canDeleteUsers && !isCurrentUser && !isAdminRow ? '' : (isCurrentUser ? ' disabled title="Aktif kullanıcı kendi kaydını silemez"' : (isAdminRow ? ' disabled title="Admin hesabı silinemez"' : ' disabled title="Silme yetkiniz yok"'))}>Sil</button>
            </div>`;
        }

        return `<tr>
          <td><strong>${escapeHtml(user.name || '-')}</strong></td>
          <td>${escapeHtml(user.email || '-')}</td>
          <td>${escapeHtml(user.phone || '-')}</td>
          <td>${formatUserRole(user.role)}</td>
          <td>${actionCell}</td>
        </tr>`;
      }).join('');

      if (totalPages > 1) {
        html += `<tr><td colspan="5" style="text-align:center;padding:12px;border-top:1px solid var(--line);">${renderPaginationButtons(totalPages, usersCurrentPage, 'users-pagination-btn')}</td></tr>`;
      }

      usersBodyEl.innerHTML = html;
    }

    async function loadUsers() {
      if (!usersBodyEl) {
        return;
      }

      if (!hasPermission('users', 'view')) {
        usersBodyEl.innerHTML = '<tr><td colspan="5">Bu bolumu goruntuleme yetkiniz yok.</td></tr>';
        return;
      }

      usersBodyEl.innerHTML = '<tr><td colspan="5">Yükleniyor...</td></tr>';
      clearStatus(usersStatusEl);

      try {
        const data = await api('/api/auth/users');
        usersCache = data.users || [];
        usersCurrentPage = 1;
        populateUserRoleFilterOptions();
        populateUserRoleOptions();
        renderUsersTable();
      } catch (error) {
        usersBodyEl.innerHTML = '<tr><td colspan="5">Kullanici listesi yuklenemedi.</td></tr>';
        setStatus(usersStatusEl, 'bad', error.message);
      }
    }

    function openUserModal(mode, user) {
      const requiredAction = mode === 'edit' ? 'update' : 'create';
      if (!hasPermission('users', requiredAction)) {
        return;
      }
      userModalMode = mode;
      editingUserId = user ? user.id : null;

      userModalTitleEl.textContent = mode === 'edit' ? 'Kullanıcı Düzenle' : 'Kullanıcı Ekle';
      userModalSubtitleEl.textContent = mode === 'edit'
        ? 'Kullanıcı bilgilerini güncelleyin. Şifreyi değiştirmeyecekseniz boş bırakın.'
        : 'Yeni kullanıcı bilgilerini girin.';
      saveUserBtn.textContent = mode === 'edit' ? 'Güncelle' : 'Kaydet';
      clearStatus(userFormStatusEl);

      userNameInputEl.value = user ? (user.name || '') : '';
      userEmailInputEl.value = user ? (user.email || '') : '';
      userPhoneInputEl.value = user ? (user.phone || '') : '';
      populateUserRoleOptions(user ? user.role : 'user');
      userPasswordInputEl.value = '';
      userPasswordInputEl.required = mode !== 'edit';
      setupUserFormValidation();
      clearUserFieldErrors();

      userModalEl.classList.add('show');
      lastFocusedElement = document.activeElement;
      setTimeout(() => userNameInputEl.focus(), 0);
    }

    function closeUserModal() {
      userModalEl.classList.remove('show');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    function getUserPayload() {
      const payload = {
        name: userNameInputEl.value.trim(),
        email: userEmailInputEl.value.trim().toLowerCase(),
        phone: sanitizePhoneInput(userPhoneInputEl.value),
        role: userRoleInputEl.value
      };

      const password = userPasswordInputEl.value;
      if (password && password.trim()) {
        payload.password = password.trim();
      }

      return payload;
    }

    function sanitizePhoneInput(value) {
      return String(value || '').replace(/\D/g, '').slice(0, 11);
    }

    function getUserFieldErrorEl(field) {
      if (!field || !field.parentElement) {
        return null;
      }

      let errorEl = field.parentElement.querySelector('.field-error');
      if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'field-error';
        field.parentElement.appendChild(errorEl);
      }

      return errorEl;
    }

    function setUserFieldError(field, message) {
      if (!field) {
        return;
      }

      const errorEl = getUserFieldErrorEl(field);
      if (!errorEl) {
        return;
      }

      errorEl.textContent = message || '';
      field.classList.toggle('field-error-state', Boolean(message));
    }

    function clearUserFieldErrors() {
      [userNameInputEl, userEmailInputEl, userPhoneInputEl, userRoleInputEl, userPasswordInputEl].forEach((field) => {
        setUserFieldError(field, '');
      });
    }

    function applyUserBackendFieldError(message) {
      const text = String(message || '').toLowerCase();

      if (text.includes('isim ve soyisim') || text.includes('ad soyad')) {
        setUserFieldError(userNameInputEl, 'Ayni ad soyad kullanilamaz.');
        if (userNameInputEl) userNameInputEl.focus();
        return true;
      }

      if (text.includes('email')) {
        setUserFieldError(userEmailInputEl, 'Email adresi zaten kullanimda.');
        if (userEmailInputEl) userEmailInputEl.focus();
        return true;
      }

      if (text.includes('telefon')) {
        setUserFieldError(userPhoneInputEl, 'Telefon numarasi zaten kullanimda.');
        if (userPhoneInputEl) userPhoneInputEl.focus();
        return true;
      }

      return false;
    }

    function validateUserForm(showFormStatus = false) {
      const payload = getUserPayload();
      const emailRegex = /^[^\s@]+@[^\s@]+\.com$/i;
      const phoneRegex = /^\d{11}$/;

      userPhoneInputEl.value = payload.phone;
      clearUserFieldErrors();

      let hasError = false;

      if (!payload.name) {
        setUserFieldError(userNameInputEl, 'Ad Soyad boş bırakılamaz.');
        hasError = true;
      }

      if (!payload.email) {
        setUserFieldError(userEmailInputEl, 'Email boş bırakılamaz.');
        hasError = true;
      } else if (!emailRegex.test(payload.email)) {
        setUserFieldError(userEmailInputEl, 'Email adresi @ içermeli ve .com ile bitmelidir.');
        hasError = true;
      }

      if (!payload.phone) {
        setUserFieldError(userPhoneInputEl, 'Telefon boş bırakılamaz.');
        hasError = true;
      } else if (!phoneRegex.test(payload.phone)) {
        setUserFieldError(userPhoneInputEl, 'Telefon tam 11 hane olmalıdır.');
        hasError = true;
      }

      if (!payload.role) {
        setUserFieldError(userRoleInputEl, 'Rol seçimi zorunludur.');
        hasError = true;
      }

      if (userModalMode === 'create') {
        if (!payload.password) {
          setUserFieldError(userPasswordInputEl, 'Şifre boş bırakılamaz.');
          hasError = true;
        } else if (payload.password.length < 6) {
          setUserFieldError(userPasswordInputEl, 'Şifre en az 6 karakter olmalıdır.');
          hasError = true;
        }
      } else if (payload.password && payload.password.length < 6) {
        setUserFieldError(userPasswordInputEl, 'Şifre en az 6 karakter olmalıdır.');
        hasError = true;
      }

      if (showFormStatus && hasError) {
        setStatus(userFormStatusEl, 'bad', 'Lütfen kırmızı ile işaretli alanları düzeltin.');
      }

      return {
        hasError,
        payload
      };
    }

    function setupUserFormValidation() {
      if (!userFormEl || userFormEl.dataset.validationReady === '1') {
        return;
      }

      userFormEl.dataset.validationReady = '1';

      if (userPhoneInputEl) {
        userPhoneInputEl.addEventListener('input', () => {
          userPhoneInputEl.value = sanitizePhoneInput(userPhoneInputEl.value);
          validateUserForm(false);
        });
      }

      [userNameInputEl, userEmailInputEl, userRoleInputEl, userPasswordInputEl].forEach((field) => {
        if (!field) {
          return;
        }

        field.addEventListener('input', () => validateUserForm(false));
        field.addEventListener('blur', () => validateUserForm(false));
        field.addEventListener('change', () => validateUserForm(false));
      });
    }

    async function createOrUpdateUser(event) {
      event.preventDefault();
      const requiredAction = userModalMode === 'edit' ? 'update' : 'create';
      if (!hasPermission('users', requiredAction)) {
        setStatus(userFormStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      clearStatus(userFormStatusEl);

      const validation = validateUserForm(true);
      if (validation.hasError) {
        return;
      }

      const payload = validation.payload;
      if (userModalMode === 'create' && (!payload.password || payload.password.length < 6)) {
        setStatus(userFormStatusEl, 'bad', 'Yeni kullanıcı için en az 6 karakter şifre girin');
        return;
      }

      if (payload.password && payload.password.length < 6) {
        setStatus(userFormStatusEl, 'bad', 'Şifre en az 6 karakter olmalıdır');
        return;
      }

      saveUserBtn.disabled = true;
      const oldText = saveUserBtn.textContent;
      saveUserBtn.textContent = 'Kaydediliyor...';

      try {
        const path = userModalMode === 'edit' ? `/api/auth/users/${editingUserId}` : '/api/auth/users';
        const method = userModalMode === 'edit' ? 'PUT' : 'POST';
        const data = await api(path, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        closeUserModal();
        await loadUsers();
        setStatus(usersStatusEl, 'ok', data.message || 'Kullanıcı kaydedildi');
      } catch (error) {
        if (applyUserBackendFieldError(error.message)) {
          setStatus(userFormStatusEl, 'bad', error.message || 'Lutfen isaretli alanlari duzeltin.');
          return;
        }
        setStatus(userFormStatusEl, 'bad', error.message);
      } finally {
        saveUserBtn.disabled = false;
        saveUserBtn.textContent = oldText;
      }
    }

    async function deleteUserFlow(userId) {
      if (!hasPermission('users', 'delete')) {
        return;
      }
      const user = usersCache.find((item) => Number(item.id) === Number(userId));
      if (!user) {
        return;
      }

      const confirmed = await confirmDelete({
        title: 'Kullanıcı Silme Onayı',
        text: `${user.name || user.email} kaydı silinsin mi?`,
        acceptLabel: 'Sil'
      });

      if (!confirmed) {
        return;
      }

      try {
        const data = await api(`/api/auth/users/${userId}`, { method: 'DELETE' });
        await loadUsers();
        setStatus(usersStatusEl, 'warn', data.message || 'Kullanıcı silindi');
      } catch (error) {
        setStatus(usersStatusEl, 'bad', error.message);
      }
    }

    function renderRolesManagementTable() {
      if (!roleListBodyEl) {
        return;
      }

      if (!rolesCache.length) {
        roleListBodyEl.innerHTML = '<tr><td colspan="2">Rol bulunamadı.</td></tr>';
        return;
      }

      roleListBodyEl.innerHTML = rolesCache.map((role) => {
        const isSystem = Boolean(role.isSystem);
        const actionButtons = `<div class="inline-actions">
          <button class="ghost-btn" data-action="edit-role" data-role-id="${role.id}" type="button">Düzenle</button>
          <button class="danger-btn" data-action="delete-role" data-role-id="${role.id}" type="button"${isSystem ? ' disabled title="Sistem rolleri silinemez"' : ''}>Sil</button>
        </div>`;
        return `<tr>
          <td><strong>${escapeHtml(toRoleLabel(role.name))}</strong><div class="muted-note">${escapeHtml(role.name)}</div></td>
          <td>${actionButtons}</td>
        </tr>`;
      }).join('');
    }

    function collectRolePermissionsFromForm() {
      const permissions = {};
      getPermissionModules().forEach((moduleName) => {
        permissions[moduleName] = { view: false, create: false, update: false, delete: false };
      });

      if (!rolePermissionsBodyEl) {
        return permissions;
      }

      rolePermissionsBodyEl.querySelectorAll('.role-perm-check').forEach((checkbox) => {
        const moduleName = String(checkbox.getAttribute('data-module') || '').trim().toLowerCase();
        const action = String(checkbox.getAttribute('data-action') || '').trim().toLowerCase();
        if (!permissions[moduleName]) {
          permissions[moduleName] = { view: false, create: false, update: false, delete: false };
        }
        if (['view', 'create', 'update', 'delete'].includes(action)) {
          permissions[moduleName][action] = Boolean(checkbox.checked);
        }
      });

      return permissions;
    }

    function setRoleEditorOpen(isOpen) {
      if (!roleEditorToggleBtnEl || !roleEditorBodyEl) {
        return;
      }

      roleEditorToggleBtnEl.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      roleEditorBodyEl.classList.toggle('collapsed', !isOpen);
    }

    function resetRoleFormForCreate() {
      editingRoleId = null;
      if (roleEditorTitleEl) {
        roleEditorTitleEl.textContent = 'Yeni Rol Ekle';
      }
      if (roleNameInputEl) {
        roleNameInputEl.value = '';
      }
      renderRolePermissionsTable({});
      if (deleteRoleBtn) {
        deleteRoleBtn.disabled = true;
      }
      setRoleEditorOpen(false);
      clearStatus(roleFormStatusEl);
    }

    function applyRoleToForm(role) {
      if (!role) {
        resetRoleFormForCreate();
        return;
      }

      editingRoleId = Number(role.id);
      if (roleEditorTitleEl) {
        roleEditorTitleEl.textContent = `${toRoleLabel(role.name)} Rolünü Düzenle`;
      }
      if (roleNameInputEl) {
        roleNameInputEl.value = String(role.name || '').trim().toLowerCase();
      }
      renderRolePermissionsTable(role.permissions || {});

      if (deleteRoleBtn) {
        deleteRoleBtn.disabled = Boolean(role.isSystem);
      }

      setRoleEditorOpen(true);
      clearStatus(roleFormStatusEl);
    }

    async function loadRoles() {
      if (!isAdminUser()) {
        rolesCache = [];
        populateUserRoleFilterOptions();
        populateUserRoleOptions();
        return;
      }

      try {
        const data = await api('/api/auth/roles');
        rolesCache = data.roles || [];
        renderRolesManagementTable();
      } catch (error) {
        rolesCache = [];
        if (roleListBodyEl) {
          roleListBodyEl.innerHTML = '<tr><td colspan="2">Rol listesi yuklenemedi.</td></tr>';
        }
        if (roleListStatusEl) {
          setStatus(roleListStatusEl, 'bad', error.message || 'Rol listesi yuklenemedi');
        }
      } finally {
        populateUserRoleFilterOptions();
        populateUserRoleOptions();
      }
    }

    async function openRoleModal() {
      if (!isAdminUser()) {
        showToast('Bu alan sadece admin tarafindan yonetilebilir', 'bad');
        return;
      }

      await loadRoles();
      clearStatus(roleFormStatusEl);
      clearStatus(roleListStatusEl);
      resetRoleFormForCreate();

      roleModalEl.classList.add('show');
      lastFocusedElement = document.activeElement;
      setTimeout(() => {
        if (roleEditorToggleBtnEl) {
          roleEditorToggleBtnEl.focus();
        }
      }, 0);
    }

    function closeRoleModal() {
      if (!roleModalEl) {
        return;
      }

      roleModalEl.classList.remove('show');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    async function saveRole(event) {
      event.preventDefault();

      if (!isAdminUser()) {
        setStatus(roleFormStatusEl, 'bad', 'Bu islem icin admin yetkisi gerekir');
        return;
      }

      const roleName = String(roleNameInputEl.value || '').trim().toLowerCase();
      if (!roleName) {
        setStatus(roleFormStatusEl, 'bad', 'Rol adi bos olamaz');
        return;
      }

      const payload = {
        name: roleName,
        permissions: collectRolePermissionsFromForm()
      };

      saveRoleBtn.disabled = true;
      const oldText = saveRoleBtn.textContent;
      saveRoleBtn.textContent = 'Kaydediliyor...';

      try {
        let data;
        if (editingRoleId) {
          data = await api(`/api/auth/roles/${editingRoleId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        } else {
          data = await api('/api/auth/roles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        }

        await loadRoles();
        renderRolesManagementTable();

        const savedRoleId = data && data.role ? Number(data.role.id) : null;
        if (savedRoleId) {
          const latest = rolesCache.find((role) => Number(role.id) === savedRoleId);
          if (latest) {
            applyRoleToForm(latest);
          }
        }

        setStatus(roleFormStatusEl, 'ok', data.message || 'Rol kaydedildi');
      } catch (error) {
        setStatus(roleFormStatusEl, 'bad', error.message);
      } finally {
        saveRoleBtn.disabled = false;
        saveRoleBtn.textContent = oldText;
      }
    }

    async function deleteRoleFlow() {
      if (!isAdminUser()) {
        setStatus(roleFormStatusEl, 'bad', 'Bu islem icin admin yetkisi gerekir');
        return;
      }

      if (!editingRoleId) {
        setStatus(roleFormStatusEl, 'bad', 'Silinecek bir rol secin');
        return;
      }

      const role = rolesCache.find((item) => Number(item.id) === Number(editingRoleId));
      if (!role) {
        setStatus(roleFormStatusEl, 'bad', 'Rol bulunamadi');
        return;
      }

      if (role.isSystem) {
        setStatus(roleFormStatusEl, 'bad', 'Sistem rolleri silinemez');
        return;
      }

      const confirmed = await confirmDelete({
        title: 'Rol Silme Onayi',
        text: `${toRoleLabel(role.name)} rolu silinsin mi?`,
        acceptLabel: 'Sil'
      });

      if (!confirmed) {
        return;
      }

      try {
        const data = await api(`/api/auth/roles/${editingRoleId}`, { method: 'DELETE' });
        await loadRoles();
        renderRolesManagementTable();
        resetRoleFormForCreate();
        setStatus(roleFormStatusEl, 'warn', data.message || 'Rol silindi');
      } catch (error) {
        setStatus(roleFormStatusEl, 'bad', error.message);
      }
    }

    async function loadProjects() {
      if (!hasPermission('projects', 'view')) {
        projectsBodyEl.innerHTML = '<tr><td colspan="6">Bu bolumu goruntuleme yetkiniz yok.</td></tr>';
        return;
      }

      projectsBodyEl.innerHTML = '<tr><td colspan="6">Yükleniyor...</td></tr>';
      clearStatus(projectsStatusEl);
      try {
        const data = await api('/api/customers/projects');
        projectsCache = data.projects || [];
        projectsCurrentPage = 1;
        renderProjectsTable();
      } catch (error) {
        projectsBodyEl.innerHTML = '<tr><td colspan="6">Proje listesi yuklenemedi.</td></tr>';
        setStatus(projectsStatusEl, 'bad', error.message);
      }
    }

    async function loadUnits() {
      if (!hasPermission('units', 'view')) {
        unitsBodyEl.innerHTML = '<tr><td colspan="5">Bu bolumu goruntuleme yetkiniz yok.</td></tr>';
        return;
      }

      unitsBodyEl.innerHTML = '<tr><td colspan="5">Yükleniyor...</td></tr>';
      clearStatus(unitsStatusEl);
      try {
        const data = await api('/api/customers/units');
        unitsCache = data.units || [];
        unitsCurrentPage = 1;
        populateUnitProjectFilter();
        renderUnitsTable();
      } catch (error) {
        unitsBodyEl.innerHTML = '<tr><td colspan="5">Konut listesi yuklenemedi.</td></tr>';
        setStatus(unitsStatusEl, 'bad', error.message);
      }
    }

    function openProjectModal(mode, project) {
      const requiredAction = mode === 'edit' ? 'update' : 'create';
      if (!hasPermission('projects', requiredAction)) {
        return;
      }
      projectModalMode = mode;
      editingProjectId = project ? project.id : null;
      projectModalTitleEl.textContent = mode === 'edit' ? 'Proje Düzenle' : 'Proje Ekle';
      projectModalSubtitleEl.textContent = mode === 'edit' ? 'Proje adını güncelleyin.' : 'Yeni projeye bir isim verin.';
      saveProjectBtn.textContent = mode === 'edit' ? 'Güncelle' : 'Kaydet';
      clearStatus(projectFormStatusEl);
      projectNameInputEl.value = project ? project.name : '';
      projectModalEl.classList.add('show');
      lastFocusedElement = document.activeElement;
      setTimeout(() => projectNameInputEl.focus(), 0);
    }

    function closeProjectModal() {
      projectModalEl.classList.remove('show');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    function openUnitModal(mode, unit) {
      const requiredAction = mode === 'edit' ? 'update' : 'create';
      if (!hasPermission('units', requiredAction)) {
        return;
      }
      unitModalMode = mode;
      editingUnitId = unit ? unit.id : null;
      unitModalTitleEl.textContent = mode === 'edit' ? 'Daire Düzenle' : 'Daire Ekle';
      unitModalSubtitleEl.textContent = mode === 'edit' ? 'Dairenin proje ve etiket bilgisini güncelleyin.' : 'Daireyi bir projeye bağlayın.';
      saveUnitBtn.textContent = mode === 'edit' ? 'Güncelle' : 'Kaydet';
      clearStatus(unitFormStatusEl);
      populateUnitModalProjectSelect(unit ? unit.projectId : '');
      unitLabelInputEl.value = unit ? unit.label : '';
      unitModalEl.classList.add('show');
      lastFocusedElement = document.activeElement;
      setTimeout(() => unitProjectSelectEl.focus(), 0);
    }

    function closeUnitModal() {
      unitModalEl.classList.remove('show');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    async function createOrUpdateProject(event) {
      event.preventDefault();
      const requiredAction = projectModalMode === 'edit' ? 'update' : 'create';
      if (!hasPermission('projects', requiredAction)) {
        setStatus(projectFormStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      clearStatus(projectFormStatusEl);
      const name = projectNameInputEl.value.trim();
      if (!name) {
        setStatus(projectFormStatusEl, 'bad', 'Proje adı boş bırakılamaz.');
        return;
      }
      saveProjectBtn.disabled = true;
      const oldText = saveProjectBtn.textContent;
      saveProjectBtn.textContent = 'Kaydediliyor...';
      try {
        const path = projectModalMode === 'edit' ? `/api/customers/projects/${editingProjectId}` : '/api/customers/projects';
        const method = projectModalMode === 'edit' ? 'PUT' : 'POST';
        const data = await api(path, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name })
        });
        closeProjectModal();
        await Promise.all([loadProjects(), loadInventory()]);
        setStatus(projectsStatusEl, 'ok', data.message);
        pushProjectActivity(
          projectModalMode === 'edit' ? `${name} projesi güncellendi.` : `${name} projesi eklendi.`,
          true
        );
      } catch (error) {
        setStatus(projectFormStatusEl, 'bad', error.message);
      } finally {
        saveProjectBtn.disabled = false;
        saveProjectBtn.textContent = oldText;
      }
    }

    async function deleteProjectFlow(projectId) {
      if (!hasPermission('projects', 'delete')) {
        return;
      }
      const project = projectsCache.find((p) => p.id === projectId);
      if (!project) return;
      const confirmed = await confirmDelete({
        title: 'Proje Silme Onayı',
        text: `"${project.name}" projesi silinsin mi? Bu projedeki bağsız konutlar da silinir. Müşteriye bağlı konut varsa işlem reddedilir.`,
        acceptLabel: 'Sil'
      });
      if (!confirmed) {
        pushProjectActivity(`${project.name} silme işlemi iptal edildi.`, false);
        return;
      }
      try {
        const data = await api(`/api/customers/projects/${projectId}`, { method: 'DELETE' });
        await Promise.all([loadProjects(), loadInventory()]);
        setStatus(projectsStatusEl, 'warn', data.message);
        pushProjectActivity(`${project.name} projesi silindi.`, true);
      } catch (error) {
        setStatus(projectsStatusEl, 'bad', error.message);
        pushProjectActivity(`Proje silme hatası: ${error.message}`, false);
      }
    }

    async function createOrUpdateUnit(event) {
      event.preventDefault();
      const requiredAction = unitModalMode === 'edit' ? 'update' : 'create';
      if (!hasPermission('units', requiredAction)) {
        setStatus(unitFormStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      clearStatus(unitFormStatusEl);
      const projectId = unitProjectSelectEl.value ? Number(unitProjectSelectEl.value) : null;
      const label = unitLabelInputEl.value.trim();
      if (!projectId) {
        setStatus(unitFormStatusEl, 'bad', 'Lütfen bir proje seçin.');
        return;
      }
      if (!label) {
        setStatus(unitFormStatusEl, 'bad', 'Daire etiketi boş bırakılamaz.');
        return;
      }
      saveUnitBtn.disabled = true;
      const oldText = saveUnitBtn.textContent;
      saveUnitBtn.textContent = 'Kaydediliyor...';
      try {
        const path = unitModalMode === 'edit' ? `/api/customers/units/${editingUnitId}` : '/api/customers/units';
        const method = unitModalMode === 'edit' ? 'PUT' : 'POST';
        const data = await api(path, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ projectId, label })
        });
        closeUnitModal();
        await Promise.all([loadUnits(), loadInventory()]);
        setStatus(unitsStatusEl, 'ok', data.message);
        pushUnitActivity(
          unitModalMode === 'edit' ? `Daire güncellendi: ${label}.` : `Yeni daire eklendi: ${label}.`,
          true
        );
      } catch (error) {
        setStatus(unitFormStatusEl, 'bad', error.message);
      } finally {
        saveUnitBtn.disabled = false;
        saveUnitBtn.textContent = oldText;
      }
    }

    async function deleteUnitFlow(unitId) {
      if (!hasPermission('units', 'delete')) {
        return;
      }
      const unit = unitsCache.find((u) => u.id === unitId);
      if (!unit) return;
      const confirmed = await confirmDelete({
        title: 'Daire Silme Onayı',
        text: `"${unit.label}" (${unit.projectName || ''}) silinsin mi? Satılmış daireler silinemez.`,
        acceptLabel: 'Sil'
      });
      if (!confirmed) {
        pushUnitActivity(`${unit.label} silme işlemi iptal edildi.`, false);
        return;
      }
      try {
        const data = await api(`/api/customers/units/${unitId}`, { method: 'DELETE' });
        await Promise.all([loadUnits(), loadInventory()]);
        setStatus(unitsStatusEl, 'warn', data.message);
        pushUnitActivity(`${unit.label} dairesi silindi.`, true);
      } catch (error) {
        setStatus(unitsStatusEl, 'bad', error.message);
        pushUnitActivity(`Daire silme hatası: ${error.message}`, false);
      }
    }

    function renderCustomersTable(type = 'owners') {
      const canUpdateCustomers = hasPermission('customers', 'update');
      const canDeleteCustomers = hasPermission('customers', 'delete');
      const searchInput = type === 'owners' ? customerSearchOwners : customerSearchPlain;

      if (!searchInput) {
        return;
      }

      const searchText = searchInput.value.trim().toLowerCase();
      const filtered = customersCache.filter((customer) => {
        const haystack = [
          customer.firstName,
          customer.lastName,
          customer.identityNumber,
          customer.phonePrimary,
          customer.phoneSecondary,
          customer.referenceName,
          customer.referralSource
        ].join(' ').toLowerCase();
        return !searchText || haystack.includes(searchText);
      });

      if (type === 'owners') {
        const owners = filtered.filter((customer) => customer.projectId || customer.unitId);
        if (ownerCountBadge) ownerCountBadge.textContent = `${owners.length} kişi`;
        if (!ownersBodyEl) {
          return;
        }
        if (!owners.length) {
          ownersBodyEl.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--muted)">Konut sahibi müşteri bulunamadı.</td></tr>';
          return;
        }

        const pagination = paginateItems(owners, customersOwnersCurrentPage);
        customersOwnersCurrentPage = pagination.currentPage;
        const pageItems = pagination.pageItems;
        const totalPages = pagination.totalPages;

        let html = pageItems.map((customer) => {
          const actionCell = (canUpdateCustomers || canDeleteCustomers)
            ? `<div class="inline-actions">
                <button class="ghost-btn" data-action="edit" data-customer-id="${customer.id}" type="button"${canUpdateCustomers ? '' : ' disabled title="Duzenleme yetkiniz yok"'}>Düzenle</button>
                <button class="danger-btn" data-action="delete" data-customer-id="${customer.id}" type="button"${canDeleteCustomers ? '' : ' disabled title="Silme yetkiniz yok"'}>Sil</button>
              </div>`
            : '<span class="muted-note">Görüntüleme</span>';
          const statusTag = customer.unitStatus === 'sold'
            ? '<span class="tag">Satıldı</span>'
            : customer.unitStatus === 'optioned'
              ? '<span class="tag optioned">Opsiyonlandı</span>'
              : '<span class="muted-note">-</span>';

          return `<tr class="owners-row">
            <td><strong>${escapeHtml(customer.firstName)} ${escapeHtml(customer.lastName)}</strong></td>
            <td>${escapeHtml(customer.identityNumber || '-')}</td>
            <td>${escapeHtml(customer.occupation || '-')}</td>
            <td>
              <div>${escapeHtml(customer.phonePrimary || '-')}</div>
              <div class="muted-note">${escapeHtml(customer.email || '-')}</div>
            </td>
            <td>
              <div>${escapeHtml(customer.projectName || '-')}</div>
              <div class="muted-note">${escapeHtml(customer.unitLabel || '-')}</div>
            </td>
            <td>${statusTag}</td>
            <td>${actionCell}</td>
          </tr>`;
        }).join('');

        if (totalPages > 1) {
          html += `<tr><td colspan="7" style="text-align:center;padding:12px;border-top:1px solid var(--line);">${renderPaginationButtons(totalPages, customersOwnersCurrentPage, 'owners-pagination-btn')}</td></tr>`;
        }

        ownersBodyEl.innerHTML = html;
        return;
      }

      const plain = filtered.filter((customer) => !customer.projectId && !customer.unitId);
      if (customerCountBadge) customerCountBadge.textContent = `${plain.length} kişi`;
      if (!customersBodyEl) {
        return;
      }
      if (!plain.length) {
        customersBodyEl.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--muted)">Kayıtlı müşteri bulunamadı.</td></tr>';
        return;
      }

      const pagination = paginateItems(plain, customersPlainCurrentPage);
      customersPlainCurrentPage = pagination.currentPage;
      const pageItems = pagination.pageItems;
      const totalPages = pagination.totalPages;

      let html = pageItems.map((customer) => {
        const actionCell = (canUpdateCustomers || canDeleteCustomers)
          ? `<div class="inline-actions">
              <button class="ghost-btn" data-action="edit" data-customer-id="${customer.id}" type="button"${canUpdateCustomers ? '' : ' disabled title="Duzenleme yetkiniz yok"'}>Düzenle</button>
              <button class="danger-btn" data-action="delete" data-customer-id="${customer.id}" type="button"${canDeleteCustomers ? '' : ' disabled title="Silme yetkiniz yok"'}>Sil</button>
            </div>`
          : '<span class="muted-note">Görüntüleme</span>';

        const detailParts = [];
        if (customer.detailDescription) {
          detailParts.push(`<strong>Detay:</strong> ${escapeHtml(customer.detailDescription)}`);
        }
        if (customer.referenceName) {
          detailParts.push(`<strong>Referans:</strong> ${escapeHtml(customer.referenceName)}`);
        }
        if (customer.referralSource) {
          detailParts.push(`<strong>Kaynak:</strong> ${escapeHtml(customer.referralSource)}`);
        }

        const detailRow = detailParts.length
          ? `<tr class="plain-customer-detail-row">
              <td colspan="4">
                ${detailParts.join(' | ')}
              </td>
            </tr>`
          : '';

        return `<tr class="plain-customer-main-row${detailParts.length ? ' has-detail' : ''}">
          <td><strong>${escapeHtml(customer.firstName)} ${escapeHtml(customer.lastName)}</strong></td>
          <td>${escapeHtml(customer.occupation || '-')}</td>
          <td>
            <div>${escapeHtml(customer.phonePrimary || '-')}</div>
            <div class="muted-note">${escapeHtml(customer.email || '-')}</div>
          </td>
          <td>${actionCell}</td>
        </tr>${detailRow}`;
      }).join('');

      if (totalPages > 1) {
        html += `<tr><td colspan="4" style="text-align:center;padding:12px;border-top:1px solid var(--line);">${renderPaginationButtons(totalPages, customersPlainCurrentPage, 'plain-customers-pagination-btn')}</td></tr>`;
      }

      customersBodyEl.innerHTML = html;
    }

    function renderCustomersInitialView() {
      const canCreate = hasPermission('customers', 'create');
      if (!canCreate && openCreateCustomerBtn) {
        openCreateCustomerBtn.disabled = true;
        openCreateCustomerBtn.title = 'Müşteri oluşturma yetkiniz yok';
      }
      if (customersInitialViewEl) customersInitialViewEl.style.display = 'grid';
      if (customersTableViewOwnersEl) customersTableViewOwnersEl.style.display = 'none';
      if (customersTableViewPlainEl) customersTableViewPlainEl.style.display = 'none';
      const owners = customersCache.filter((c) => c.projectId || c.unitId);
      const plain = customersCache.filter((c) => !c.projectId && !c.unitId);
      if (ownerCountInitial) ownerCountInitial.textContent = `${owners.length} müşteri`;
      if (customerCountInitial) customerCountInitial.textContent = `${plain.length} müşteri`;
    }

    function showOwnersTableView() {
      if (customersInitialViewEl) customersInitialViewEl.style.display = 'none';
      if (customersTableViewOwnersEl) {
        customersTableViewOwnersEl.style.display = 'block';
        if (customerSearchOwners) customerSearchOwners.focus();
      }
      if (customersTableViewPlainEl) customersTableViewPlainEl.style.display = 'none';
      renderCustomersTable('owners');
    }

    function showPlainTableView() {
      if (customersInitialViewEl) customersInitialViewEl.style.display = 'none';
      if (customersTableViewOwnersEl) customersTableViewOwnersEl.style.display = 'none';
      if (customersTableViewPlainEl) {
        customersTableViewPlainEl.style.display = 'block';
        if (customerSearchPlain) customerSearchPlain.focus();
      }
      renderCustomersTable('plain');
    }

    function backToCustomersInitialView() {
      renderCustomersInitialView();
    }

    function isTokenErrorMessage(message = '') {
      const normalized = String(message || '').toLowerCase();
      return normalized.includes('token') || normalized.includes('oturum') || normalized.includes('yetkisiz');
    }

    function handleAuthFailure(message) {
      if (authRedirectHandled) {
        return;
      }

      authRedirectHandled = true;
      localStorage.removeItem(TOKEN_KEY);
      showToast(message || 'Token gecersiz veya suresi dolmus', 'bad');
      window.setTimeout(() => {
        window.location.href = '/login.html';
      }, 900);
    }

    async function requestWithPossibleFallback(path, fetchOptions) {
      const firstResponse = await fetch(path, fetchOptions);
      const firstContentType = firstResponse.headers.get('content-type') || '';
      const firstLooksJson = firstContentType.includes('application/json');

      if (firstLooksJson && firstResponse.status !== 404) {
        return firstResponse;
      }

      if (!path.startsWith('/api/')) {
        return firstResponse;
      }

      const fallbackUrl = `${API_FALLBACK_ORIGIN}${path}`;
      return fetch(fallbackUrl, fetchOptions);
    }

    async function api(path, options = {}) {
      const method = String(options.method || 'GET').toUpperCase();
      
      // Timeout setup
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 saniye timeout
      
      try {
        const response = await requestWithPossibleFallback(path, {
          ...options,
          signal: controller.signal,
          headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${currentToken}`
          }
        });

        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error(`Sunucu beklenmedik bir yanit dondurdu (HTTP ${response.status})`);
        }

        const data = await response.json();
        if (!response.ok) {
          const errorMessage = data.message || `Istek basarisiz oldu (${response.status})`;

          if (response.status === 401 || (response.status === 403 && isTokenErrorMessage(errorMessage))) {
            handleAuthFailure(errorMessage);
          } else {
            showToast(errorMessage, 'bad');
          }

          throw new Error(errorMessage);
        }

        if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method) && data.message) {
          showToast(data.message, 'ok');
        }

        return data;
      } catch (error) {
        if (error.name === 'AbortError') {
          throw new Error('İstek zaman aşımına uğradı (15 saniye)');
        }
        throw error;
      } finally {
        clearTimeout(timeoutId);
      }
    }

    async function loadCustomerSummary() {
      try {
        const data = await api('/api/customers/summary');
        if (latestCustomerBoxEl) {
          latestCustomerBoxEl.textContent = formatLatestCustomer(data.summary.latestCustomer);
        }
      } catch (error) {
        if (latestCustomerBoxEl) {
          latestCustomerBoxEl.textContent = `Özet alınamadı: ${error.message}`;
        }
      }
    }

    async function loadInventory() {
      if (!hasPermission('customers', 'view')) {
        return;
      }

      try {
        const data = await api('/api/customers/inventory');
        inventoryState = data.inventory;
        renderDashboardWidgets();
        populateProjectOptions(projectIdEl.value);
        renderProjectInventory();
      } catch (error) {
        console.warn('Envanter yüklenemedi:', error.message);
      }
    }

    async function loadCustomers() {
      if (!hasPermission('customers', 'view')) {
        if (ownersBodyEl) ownersBodyEl.innerHTML = '<tr><td colspan="7">Bu bolumu goruntuleme yetkiniz yok.</td></tr>';
        if (customersBodyEl) customersBodyEl.innerHTML = '<tr><td colspan="4">Bu bolumu goruntuleme yetkiniz yok.</td></tr>';
        return;
      }

      if (ownersBodyEl) ownersBodyEl.innerHTML = '<tr><td colspan="7">Yükleniyor...</td></tr>';
      if (customersBodyEl) customersBodyEl.innerHTML = '<tr><td colspan="4">Yükleniyor...</td></tr>';
      clearStatus(customersStatusEl);

      try {
        const data = await api('/api/customers');
        customersCache = data.customers || [];
        customersOwnersCurrentPage = 1;
        customersPlainCurrentPage = 1;
        renderCustomersInitialView();
      } catch (error) {
        renderCustomersInitialView();
        if (customersStatusOwners) setStatus(customersStatusOwners, 'bad', error.message);
      }
    }

    async function loadProfile() {
      try {
        const data = await api('/api/auth/profile');
        const user = data.user || {};
        const createdAt = user.created_at || user.createdAt
          ? new Date(user.created_at || user.createdAt).toLocaleString('tr-TR')
          : '-';

        const defaultAvatar = '/images/profile/default-user.svg';
        const photoUrl = user.profile_photo || defaultAvatar;

        if (profileResultEl) {
          profileResultEl.innerHTML = `
            <div style="display:grid;gap:10px;grid-template-columns:repeat(2,minmax(0,1fr));">
              <div><strong>Kullanıcı Adı</strong><div class="muted-note" style="margin-top:4px">${escapeHtml(user.name || '-')}</div></div>
              <div><strong>Email</strong><div class="muted-note" style="margin-top:4px">${escapeHtml(user.email || '-')}</div></div>
              <div><strong>Telefon</strong><div class="muted-note" style="margin-top:4px">${escapeHtml(user.phone || '-')}</div></div>
              <div><strong>Rol</strong><div class="muted-note" style="margin-top:4px">${escapeHtml(toRoleLabel(user.role || '-'))}</div></div>
              <div><strong>Şifre</strong><div class="muted-note" style="margin-top:4px">Güvenlik nedeniyle gösterilmez</div></div>
              <div><strong>Kayıt Tarihi</strong><div class="muted-note" style="margin-top:4px">${escapeHtml(createdAt)}</div></div>
            </div>
          `;
        }

        if (profileHeaderPhoto) {
          profileHeaderPhoto.src = photoUrl;
          profileHeaderPhoto.onerror = () => {
            profileHeaderPhoto.src = defaultAvatar;
          };
        }
        if (profileHeaderName) {
          const fullName = user.name || 'Profil';
          profileHeaderName.textContent = formatProfileHeaderDisplayName(fullName);
          profileHeaderName.title = fullName;
        }
        if (profileUpdatePhoto) profileUpdatePhoto.src = photoUrl;
        if (profileNameInput) profileNameInput.value = user.name || '';
        if (profileEmailInput) profileEmailInput.value = user.email || '';
        if (profilePhoneInput) profilePhoneInput.value = user.phone || '';
      } catch (error) {
        if (profileResultEl) {
          profileResultEl.innerHTML = '<span style="color:#7f1d1d">Profil bilgileri yuklenemedi.</span>';
        }
        console.error('Profil yükleme hatası:', error);
      }
    }

    async function submitProfileUpdate(event) {
      event.preventDefault();

      if (!hasPermission('profile', 'update')) {
        setStatus(profileUpdateStatus, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }

      clearStatus(profileUpdateStatus);

      const name = (profileNameInput?.value || '').trim();
      const email = (profileEmailInput?.value || '').trim().toLowerCase();
      const phone = (profilePhoneInput?.value || '').trim();
      if (!name) {
        setStatus(profileUpdateStatus, 'bad', 'Ad soyad alanini doldurun');
        return;
      }

      if (!email) {
        setStatus(profileUpdateStatus, 'bad', 'Email alanini doldurun');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.com$/i.test(email)) {
        setStatus(profileUpdateStatus, 'bad', 'Email adresi gecersiz. @ icermeli ve .com ile bitmelidir');
        return;
      }

      if (!/^\d{11}$/.test(phone)) {
        setStatus(profileUpdateStatus, 'bad', 'Telefon alani tam olarak 11 haneli olmalidir');
        return;
      }

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      if (profilePhotoInput?.files?.length > 0) {
        formData.append('profilePhoto', profilePhotoInput.files[0]);
      }

      saveProfileBtn.disabled = true;
      const oldText = saveProfileBtn.textContent;
      saveProfileBtn.textContent = 'Guncelleniyor...';

      try {
        const data = await api('/api/auth/profile', {
          method: 'PATCH',
          body: formData
        });

        setStatus(profileUpdateStatus, 'ok', data.message || 'Profil guncellendi');
        profilePhotoInput.value = '';
        loadProfile();
      } catch (error) {
        setStatus(profileUpdateStatus, 'bad', error.message);
      } finally {
        saveProfileBtn.disabled = false;
        saveProfileBtn.textContent = oldText;
      }
    }

    async function loadPermissionContext() {
      try {
        const data = await api('/api/auth/permissions/me');
        permissionMap = data.permissions || buildLegacyPermissionMap(getCurrentRole());

        if (currentUser && data.role) {
          currentUser.role = data.role;
        }
      } catch (error) {
        permissionMap = buildLegacyPermissionMap(getCurrentRole());
      }
    }

    async function changePassword(event) {
      event.preventDefault();
      clearStatus(passwordFormStatusEl);

      const currentPassword = currentPasswordEl.value;
      const newPassword = newPasswordEl.value;
      const confirmPassword = confirmPasswordEl.value;

      if (!currentPassword || !newPassword || !confirmPassword) {
        setStatus(passwordFormStatusEl, 'bad', 'Tüm şifre alanlarını doldurmalısınız');
        return;
      }

      if (newPassword.length < 6) {
        setStatus(passwordFormStatusEl, 'bad', 'Yeni şifre en az 6 karakter olmalıdır');
        return;
      }

      if (newPassword !== confirmPassword) {
        setStatus(passwordFormStatusEl, 'bad', 'Yeni şifre ile tekrar edilen şifre aynı olmalıdır');
        return;
      }

      savePasswordBtn.disabled = true;
      const oldText = savePasswordBtn.textContent;
      savePasswordBtn.textContent = 'Güncelleniyor...';

      try {
        const data = await api('/api/auth/password', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ currentPassword, newPassword, confirmPassword })
        });

        passwordFormEl.reset();
        setStatus(passwordFormStatusEl, 'ok', data.message || 'Şifre başarıyla güncellendi');
      } catch (error) {
        setStatus(passwordFormStatusEl, 'bad', error.message);
      } finally {
        savePasswordBtn.disabled = false;
        savePasswordBtn.textContent = oldText;
      }
    }

    async function loadMe() {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        window.location.href = '/login.html';
        return;
      }

      currentToken = token;

      try {
        const data = await api('/api/auth/me');

        if (!data || !data.user) {
          localStorage.removeItem(TOKEN_KEY);
          setStatus(statusEl, 'bad', 'Oturum geçersiz: kimlik doğrulama yanıtı alınamadı');
          if (resultEl) {
            resultEl.textContent = JSON.stringify(data, null, 2);
          }
          setTimeout(() => {
            window.location.href = '/login.html';
          }, 1000);
          return;
        }

        currentUser = data.user;
        await loadPermissionContext();
        applyRolePermissions();
        setStatus(statusEl, 'ok', 'Oturum aktif. Müşteri yönetimi hazır.');
        if (resultEl) {
          resultEl.textContent = JSON.stringify(data, null, 2);
        }

        loadProfile().catch((error) => {
          console.error('Profil fotoğrafı yüklenemedi:', error);
        });

        const preloadTasks = [loadRoles()];

        if (hasPermission('customers', 'view')) {
          preloadTasks.push(loadInventory(), loadCustomers());
        }

        if (hasPermission('support', 'view')) {
          preloadTasks.push(loadOpenTickets(), loadSupportTags());
        }

        await Promise.all(preloadTasks);
      } catch (error) {
        setStatus(statusEl, 'bad', 'Sunucu bağlantı hatası: ' + error.message);
      }
    }

    function switchView(viewName, options = {}) {
      const { updateHistory = false } = options;
      let nextView = viewMeta[viewName] ? viewName : 'dashboard';

      if (currentUser && !canAccessView(nextView)) {
        showToast('Bu menu icin yetkiniz yok', 'bad');
        return;
      }

      // VIEW'ları göster/gizle
      document.querySelectorAll('.view').forEach((section) => {
        const shouldBeActive = section.id === `view-${nextView}`;
        section.classList.toggle('active', shouldBeActive);
      });

      // Menu item'larını aktifle
      menuItems.forEach((item) => {
        item.classList.toggle('active', item.dataset.view === nextView);
      });

      // Title ve subtitle güncelle
      const meta = viewMeta[nextView] || viewMeta.dashboard;
      if (viewTitleEl) viewTitleEl.textContent = meta.title;
      if (viewSubtitleEl) viewSubtitleEl.textContent = meta.subtitle;
      document.title = `Mef City | ${meta.title}`;

      // History güncelle
      if (updateHistory) {
        const nextPath = viewRoutes[nextView] || viewRoutes.dashboard;
        if (normalizePath(window.location.pathname) !== nextPath) {
          window.history.pushState({ view: nextView }, '', nextPath);
        }
      }

      // Her view'a ait veri yüklemesi
      if (nextView === 'dashboard') {
        loadOpenTickets().catch(() => {});
      } else if (nextView === 'customers') {
        loadInventory().then(() => loadCustomers()).catch((error) => {
          if (customersStatusOwners) setStatus(customersStatusOwners, 'bad', error.message);
        });
      } else if (nextView === 'projects') {
        Promise.all([loadProjects(), loadInventory()]).catch((error) => {
          if (projectsStatusEl) setStatus(projectsStatusEl, 'bad', error.message);
        });
      } else if (nextView === 'units') {
        Promise.all([loadInventory(), loadUnits()]).catch((error) => {
          if (unitsStatusEl) setStatus(unitsStatusEl, 'bad', error.message);
        });
      } else if (nextView === 'profile') {
        loadProfile().catch((error) => {
          if (profileResultEl) {
            profileResultEl.innerHTML = '<span style="color:#7f1d1d">Profil bilgileri yuklenemedi.</span>';
          }
          if (statusEl) setStatus(statusEl, 'bad', error.message);
        });
      } else if (nextView === 'support') {
        Promise.all([loadSupportTags(), loadSupportTickets()]).catch((error) => {
          if (supportTicketsStatusEl) setStatus(supportTicketsStatusEl, 'bad', error.message);
        });
      } else if (nextView === 'users') {
        loadUsers().catch((error) => {
          if (usersStatusEl) setStatus(usersStatusEl, 'bad', error.message);
        });
      } else if (nextView === 'settings') {
        Promise.all([loadSupportTags(), loadCustomerReferralSources(), loadSmtpSettings()]).catch((error) => {
          if (tagsStatusEl) setStatus(tagsStatusEl, 'bad', error.message);
        });
        closeSettingsFeatures();
      }
    }

    async function createOrUpdateCustomer(event) {
      event.preventDefault();
      const requiredAction = customerModalMode === 'edit' ? 'update' : 'create';
      if (!hasPermission('customers', requiredAction)) {
        setStatus(customerFormStatusEl, 'bad', 'Bu islem icin yetkiniz yok');
        return;
      }
      clearStatus(customerFormStatusEl);
      clearCustomerFieldErrors();

      if (projectIdEl.value && !unitIdEl.value) {
        setStatus(customerFormStatusEl, 'bad', 'Proje seçildiyse bağlı konut da seçilmelidir.');
        return;
      }

      const payload = getCustomerPayload();
      saveCustomerBtn.disabled = true;
      const oldText = saveCustomerBtn.textContent;
      saveCustomerBtn.textContent = customerModalMode === 'edit' ? 'Kaydediliyor...' : 'Oluşturuluyor...';

      try {
        const path = customerModalMode === 'edit' ? `/api/customers/${editingCustomerId}` : '/api/customers';
        const method = customerModalMode === 'edit' ? 'PUT' : 'POST';
        const data = await api(path, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        closeCustomerModal();
        await Promise.all([loadInventory(), loadCustomers()]);
        setStatus(customersStatusEl, 'ok', data.message);
        pushActivity(
          customerModalMode === 'edit'
            ? `${data.customer.firstName} ${data.customer.lastName} güncellendi.`
            : `${data.customer.firstName} ${data.customer.lastName} eklendi.`,
          true
        );
      } catch (error) {
        if (applyCustomerBackendFieldError(error.message)) {
          setStatus(customerFormStatusEl, 'bad', error.message || 'Lutfen isaretli alanlari duzeltin.');
          return;
        }
        setStatus(customerFormStatusEl, 'bad', error.message);
      } finally {
        saveCustomerBtn.disabled = false;
        saveCustomerBtn.textContent = oldText;
      }
    }

    async function deleteCustomerFlow(customerId) {
      if (!hasPermission('customers', 'delete')) {
        return;
      }
      const customer = customersCache.find((item) => item.id === customerId);
      if (!customer) {
        return;
      }

      const confirmed = await confirmDelete({
        title: 'Müşteri Silme Onayı',
        text: `${customer.firstName} ${customer.lastName} kaydı silinsin mi? Bu işlem varsa bağlı daireyi tekrar boş stoğa çeker.`,
        acceptLabel: 'Sil'
      });

      if (!confirmed) {
        pushActivity(`${customer.firstName} ${customer.lastName} silme işlemi iptal edildi.`, false);
        return;
      }

      try {
        const data = await api(`/api/customers/${customerId}`, {
          method: 'DELETE'
        });
        await Promise.all([loadInventory(), loadCustomers()]);
        setStatus(customersStatusEl, 'warn', data.message);
        pushActivity(`${customer.firstName} ${customer.lastName} silindi.`, true);
      } catch (error) {
        setStatus(customersStatusEl, 'bad', error.message);
        pushActivity(`Müşteri silme hatası: ${error.message}`, false);
      }
    }

    function trapModalFocus(event, modalEl, firstEl, lastEl, escapeHandler, enterHandler) {
      if (!modalEl.classList.contains('show')) {
        return false;
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        escapeHandler();
        return true;
      }

      if (event.key === 'Enter' && enterHandler) {
        const active = document.activeElement;
        if (active.tagName !== 'TEXTAREA') {
          event.preventDefault();
          enterHandler();
          return true;
        }
      }

      if (event.key !== 'Tab') {
        return true;
      }

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }

      return true;
    }

    menuItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        event.preventDefault();
        switchView(item.dataset.view, { updateHistory: true });
        closeMobileMenu();
      });
    });

    if (homeNavBtn) {
      homeNavBtn.addEventListener('click', (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        event.preventDefault();
        switchView('dashboard', { updateHistory: true });
        closeMobileMenu();
      });
    }

    if (openProfileBtn) {
      openProfileBtn.addEventListener('click', (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        event.preventDefault();
        switchView('profile', { updateHistory: true });
        closeMobileMenu();
      });
    }

    if (mobileMenuToggleBtnEl) {
      mobileMenuToggleBtnEl.addEventListener('click', () => {
        const isOpen = document.body.classList.contains('mobile-menu-open');
        setMobileMenuState(!isOpen);
      });
    }

    if (mobileSidebarBackdropEl) {
      mobileSidebarBackdropEl.addEventListener('click', closeMobileMenu);
    }

    window.addEventListener('popstate', () => {
      switchView(getViewFromLocation());
      closeMobileMenu();
    });

    window.addEventListener('resize', () => {
      if (!isMobileViewport()) {
        closeMobileMenu();
      }
    });

    if (passwordFormEl) {
      passwordFormEl.addEventListener('submit', changePassword);
    }

    if (profileHeaderBox) {
      profileHeaderBox.addEventListener('click', () => switchView('profile', { updateHistory: true }));
    }

    if (profileUpdateForm) {
      profileUpdateForm.addEventListener('submit', submitProfileUpdate);
    }

    if (openCreateUserBtn) {
      openCreateUserBtn.addEventListener('click', () => openUserModal('create', null));
    }

    if (openRoleManagerBtn) {
      openRoleManagerBtn.addEventListener('click', () => {
        openRoleModal();
      });
    }

    if (closeRoleModalBtn) {
      closeRoleModalBtn.addEventListener('click', closeRoleModal);
    }

    if (cancelRoleBtn) {
      cancelRoleBtn.addEventListener('click', closeRoleModal);
    }

    if (openRoleCreateBtn) {
      openRoleCreateBtn.addEventListener('click', () => {
        resetRoleFormForCreate();
        setRoleEditorOpen(true);
        if (roleNameInputEl) {
          roleNameInputEl.focus();
        }
      });
    }

    if (roleEditorToggleBtnEl) {
      roleEditorToggleBtnEl.addEventListener('click', () => {
        const isOpen = roleEditorToggleBtnEl.getAttribute('aria-expanded') === 'true';
        setRoleEditorOpen(!isOpen);
      });
    }

    if (deleteRoleBtn) {
      deleteRoleBtn.addEventListener('click', deleteRoleFlow);
    }

    if (roleListBodyEl) {
      roleListBodyEl.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-action]');
        if (!button || button.disabled) {
          return;
        }

        const roleId = Number(button.dataset.roleId || 0);
        if (!roleId) {
          return;
        }

        const selectedRole = rolesCache.find((role) => Number(role.id) === roleId);
        if (!selectedRole) {
          return;
        }

        if (button.dataset.action === 'edit-role') {
          applyRoleToForm(selectedRole);
          roleNameInputEl.focus();
          return;
        }

        if (button.dataset.action === 'delete-role') {
          applyRoleToForm(selectedRole);
          deleteRoleFlow();
        }
      });
    }

    if (roleModalEl) {
      roleModalEl.addEventListener('click', (event) => {
        if (event.target === roleModalEl) {
          closeRoleModal();
        }
      });
    }

    if (roleFormEl) {
      roleFormEl.addEventListener('submit', saveRole);
    }

    if (closeUserModalBtn) {
      closeUserModalBtn.addEventListener('click', closeUserModal);
    }

    if (cancelUserBtn) {
      cancelUserBtn.addEventListener('click', closeUserModal);
    }

    if (userModalEl) {
      userModalEl.addEventListener('click', (event) => {
        if (event.target === userModalEl) {
          closeUserModal();
        }
      });
    }

    if (userFormEl) {
      userFormEl.addEventListener('submit', createOrUpdateUser);
    }

    if (userSearchEl) {
      userSearchEl.addEventListener('input', () => {
        usersCurrentPage = 1;
        renderUsersTable();
      });
    }

    if (userRoleFilterEl) {
      userRoleFilterEl.addEventListener('change', () => {
        usersCurrentPage = 1;
        renderUsersTable();
      });
    }

    if (usersBodyEl) {
      usersBodyEl.addEventListener('click', (event) => {
        const paginationBtn = event.target.closest('button.users-pagination-btn');
        if (paginationBtn) {
          const page = Number(paginationBtn.dataset.page);
          if (!Number.isNaN(page)) {
            usersCurrentPage = page;
            renderUsersTable();
          }
          return;
        }

        const button = event.target.closest('button[data-action]');
        if (!button || button.disabled) {
          return;
        }

        const userId = Number(button.dataset.userId);
        if (!userId) {
          return;
        }

        if (button.dataset.action === 'edit') {
          const user = usersCache.find((item) => Number(item.id) === userId);
          if (user) {
            openUserModal('edit', user);
          }
        }

        if (button.dataset.action === 'delete') {
          deleteUserFlow(userId);
        }
      });
    }

    openCreateCustomerBtn.addEventListener('click', () => {
      openCustomerModal('create', null);
    });

    openCreateProjectBtn.addEventListener('click', () => openProjectModal('create', null));
    closeProjectModalBtn.addEventListener('click', closeProjectModal);
    cancelProjectBtn.addEventListener('click', closeProjectModal);
    projectModalEl.addEventListener('click', (event) => {
      if (event.target === projectModalEl) closeProjectModal();
    });
    projectFormEl.addEventListener('submit', createOrUpdateProject);
    projectSearchEl.addEventListener('input', () => {
      projectsCurrentPage = 1;
      renderProjectsTable();
    });

    projectsBodyEl.addEventListener('click', (event) => {
      const paginationBtn = event.target.closest('button.projects-pagination-btn');
      if (paginationBtn) {
        const page = Number(paginationBtn.dataset.page);
        if (!Number.isNaN(page)) {
          projectsCurrentPage = page;
          renderProjectsTable();
        }
        return;
      }

      const button = event.target.closest('button[data-action]');
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      const projectId = Number(button.dataset.projectId);
      if (!projectId) return;
      if (button.dataset.action === 'edit') {
        const project = projectsCache.find((p) => p.id === projectId);
        if (project) openProjectModal('edit', project);
      }
      if (button.dataset.action === 'delete') deleteProjectFlow(projectId);
    });

    openCreateUnitBtn.addEventListener('click', () => openUnitModal('create', null));
    closeUnitModalBtn.addEventListener('click', closeUnitModal);
    cancelUnitBtn.addEventListener('click', closeUnitModal);
    unitModalEl.addEventListener('click', (event) => {
      if (event.target === unitModalEl) closeUnitModal();
    });
    unitFormEl.addEventListener('submit', createOrUpdateUnit);
    unitSearchEl.addEventListener('input', () => {
      unitsCurrentPage = 1;
      renderUnitsTable();
    });
    unitProjectFilterEl.addEventListener('change', () => {
      unitsCurrentPage = 1;
      renderUnitsTable();
    });
    unitStatusFilterEl.addEventListener('change', () => {
      unitsCurrentPage = 1;
      renderUnitsTable();
    });

    unitsBodyEl.addEventListener('click', (event) => {
      const paginationBtn = event.target.closest('button.units-pagination-btn');
      if (paginationBtn) {
        const page = Number(paginationBtn.dataset.page);
        if (!Number.isNaN(page)) {
          unitsCurrentPage = page;
          renderUnitsTable();
        }
        return;
      }

      const button = event.target.closest('button[data-action]');
      if (!button || button.disabled) return;
      event.preventDefault();
      event.stopPropagation();
      const unitId = Number(button.dataset.unitId);
      if (!unitId) return;
      if (button.dataset.action === 'edit') {
        const unit = unitsCache.find((u) => u.id === unitId);
        if (unit) openUnitModal('edit', unit);
      }
      if (button.dataset.action === 'delete') deleteUnitFlow(unitId);
    });

    if (openSupportCreateModalBtn) {
      openSupportCreateModalBtn.addEventListener('click', () => openSupportTicketModal('create', null));
    }

    if (closeSupportTicketModalBtn) {
      closeSupportTicketModalBtn.addEventListener('click', closeSupportTicketModal);
    }

    if (cancelSupportTicketBtn) {
      cancelSupportTicketBtn.addEventListener('click', closeSupportTicketModal);
    }

    if (supportTicketModalEl) {
      supportTicketModalEl.addEventListener('click', (event) => {
        if (event.target === supportTicketModalEl) {
          closeSupportTicketModal();
        }
      });
    }

    if (supportTicketFormEl) {
      supportTicketFormEl.addEventListener('submit', submitSupportTicket);
    }

    if (supportSearchEl) {
      supportSearchEl.addEventListener('input', () => {
        supportCurrentPage = 1;
        renderSupportTicketsTable();
      });
    }

    if (supportStatusFilterEl) {
      supportStatusFilterEl.addEventListener('change', loadSupportTickets);
    }

    if (goToSupportViewBtn) {
      goToSupportViewBtn.addEventListener('click', () => switchView('support', { updateHistory: true }));
    }

    if (closeSupportNotesModalBtn) {
      closeSupportNotesModalBtn.addEventListener('click', closeSupportNotesModal);
    }

    if (supportNotesModalEl) {
      supportNotesModalEl.addEventListener('click', (event) => {
        if (event.target === supportNotesModalEl) {
          closeSupportNotesModal();
        }
      });
    }

    if (supportNoteFormEl) {
      supportNoteFormEl.addEventListener('submit', submitSupportNote);
    }

    if (supportTicketsBodyEl) {
      supportTicketsBodyEl.addEventListener('click', (event) => {
        const paginationBtn = event.target.closest('button.support-pagination-btn');
        if (paginationBtn) {
          const page = Number(paginationBtn.dataset.page);
          if (!Number.isNaN(page)) {
            supportCurrentPage = page;
            renderSupportTicketsTable();
          }
          return;
        }

        const button = event.target.closest('button[data-action]');
        if (!button) {
          return;
        }

        const ticketId = Number(button.dataset.ticketId);
        if (!ticketId) {
          return;
        }

        if (button.dataset.action === 'open-notes') {
          openSupportNotes(ticketId);
          return;
        }

        if (button.dataset.action === 'edit-ticket') {
          editSupportTicket(ticketId);
          return;
        }

        if (button.dataset.action === 'delete-ticket') {
          deleteSupportTicket(ticketId);
        }
      });
    }

    if (createTagBtn) {
      createTagBtn.addEventListener('click', createSupportTag);
    }

    if (createReferenceSourceBtn) {
      createReferenceSourceBtn.addEventListener('click', createReferenceSource);
    }

    if (referenceSourceInputEl) {
      referenceSourceInputEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          createReferenceSource();
        }
      });
    }

    if (smtpSettingsFormEl) {
      smtpSettingsFormEl.addEventListener('submit', saveSmtpSettings);
    }

    if (notificationsSettingsFormEl) {
      notificationsSettingsFormEl.addEventListener('submit', saveNotificationsSettings);
    }

    if (logsSettingsFormEl) {
      logsSettingsFormEl.addEventListener('submit', saveLogsSettings);
    }

    if (auditLogRefreshBtnEl) {
      auditLogRefreshBtnEl.addEventListener('click', () => {
        loadAuditLogs(1);
      });
    }

    if (auditLogPageButtonsEl) {
      auditLogPageButtonsEl.addEventListener('click', (event) => {
        const button = event.target.closest('button.audit-log-pagination-btn');
        if (!button) {
          return;
        }

        const page = Number(button.dataset.page);
        if (Number.isNaN(page)) {
          return;
        }

        loadAuditLogs(page);
      });
    }

    if (auditLogPrevBtnEl) {
      auditLogPrevBtnEl.addEventListener('click', () => {
        if (auditLogCurrentPage <= 1) {
          return;
        }
        loadAuditLogs(auditLogCurrentPage - 1);
      });
    }

    if (auditLogNextBtnEl) {
      auditLogNextBtnEl.addEventListener('click', () => {
        loadAuditLogs(auditLogCurrentPage + 1);
      });
    }

    if (securitySettingsFormEl) {
      securitySettingsFormEl.addEventListener('submit', saveSecuritySettings);
    }

    if (prefDarkThemeEl) {
      prefDarkThemeEl.addEventListener('change', () => {
        const selectedTheme = prefDarkThemeEl.checked ? 'dark' : 'light';
        localStorage.setItem(THEME_MODE_KEY, 'manual');
        localStorage.setItem(THEME_KEY, selectedTheme);
        applyTheme(selectedTheme, 'manual');
      });
    }

    if (themeToggleBtnEl) {
      themeToggleBtnEl.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_MODE_KEY, 'manual');
        localStorage.setItem(THEME_KEY, nextTheme);
        applyTheme(nextTheme, 'manual');
      });
    }

    if (saveUserPrefsBtnEl) {
      saveUserPrefsBtnEl.addEventListener('click', saveUserPrefs);
    }

    if (settingsFeatureButtons.length) {
      settingsFeatureButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const feature = String(button.getAttribute('data-feature') || '').trim().toLowerCase();
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          if (isExpanded) {
            closeSettingsFeatures();
            return;
          }

          if (feature === 'tags' || feature === 'smtp' || feature === 'user-settings') {
            openSettingsFeature(feature, feature);
            return;
          }

          if (feature === 'references') {
            openSettingsFeature('references', 'references');
            loadCustomerReferralSources();
            return;
          }

          if (feature === 'notifications') {
            openSettingsFeature('notifications', 'notifications');
            loadNotificationsSettings();
            return;
          }

          if (feature === 'logs') {
            openSettingsFeature('logs', 'logs');
            loadLogsSettings();
            loadAuditLogs(1);
            return;
          }

          if (feature === 'security') {
            openSettingsFeature('security', 'security');
            loadSecuritySettings();
            return;
          }

          if (settingsPlaceholderTitleEl) {
            settingsPlaceholderTitleEl.textContent = String(button.getAttribute('data-placeholder-title') || 'Modül Hazırlanıyor');
          }

          if (settingsPlaceholderTextEl) {
            settingsPlaceholderTextEl.textContent = String(button.getAttribute('data-placeholder-desc') || 'Bu ayar modülü için altyapı hazırlanıyor. İçeriği birlikte adım adım doldurabiliriz.');
          }

          openSettingsFeature('placeholder', feature);
        });
      });
    }

    if (tagsListEl) {
      tagsListEl.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-action="delete-tag"]');
        if (!button) {
          return;
        }
        const tagId = Number(button.dataset.tagId);
        if (!tagId) {
          return;
        }
        deleteSupportTag(tagId);
      });
    }

    if (referencesListEl) {
      referencesListEl.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-action="delete-reference-source"]');
        if (!button) {
          return;
        }

        const index = Number(button.dataset.referenceIndex);
        if (Number.isNaN(index)) {
          return;
        }

        deleteReferenceSource(index);
      });
    }

    // Customer selection buttons
    if (selectOwnersBtn) {
      selectOwnersBtn.addEventListener('click', showOwnersTableView);
    }
    if (selectPlainBtn) {
      selectPlainBtn.addEventListener('click', showPlainTableView);
    }
    if (backFromOwnersBtn) {
      backFromOwnersBtn.addEventListener('click', backToCustomersInitialView);
    }
    if (backFromPlainBtn) {
      backFromPlainBtn.addEventListener('click', backToCustomersInitialView);
    }

    // Multiple Create Customer buttons
    const allCreateCustomerBtns = [openCreateCustomerBtn, openCreateCustomerBtn2, openCreateCustomerBtn3];
    for (const btn of allCreateCustomerBtns) {
      if (btn) {
        btn.addEventListener('click', () => {
          openCustomerModal('create', null);
        });
      }
    }

    // Customer search inputs
    if (customerSearchOwners) {
      customerSearchOwners.addEventListener('input', () => {
        customersOwnersCurrentPage = 1;
        renderCustomersTable('owners');
      });
    }
    if (customerSearchPlain) {
      customerSearchPlain.addEventListener('input', () => {
        customersPlainCurrentPage = 1;
        renderCustomersTable('plain');
      });
    }

    projectIdEl.addEventListener('change', () => {
      renderUnitOptions(projectIdEl.value, '');
      assignmentStatusEl.disabled = true;
      assignmentStatusEl.value = '';
    });

    unitIdEl.addEventListener('change', () => {
      if (unitIdEl.value) {
        assignmentStatusEl.disabled = false;
      } else {
        assignmentStatusEl.disabled = true;
        assignmentStatusEl.value = '';
      }
    });

    closeCustomerModalBtn.addEventListener('click', closeCustomerModal);
    cancelCustomerBtn.addEventListener('click', closeCustomerModal);
    customerModalEl.addEventListener('click', (event) => {
      if (event.target === customerModalEl) {
        closeCustomerModal();
      }
    });

    customerFormEl.addEventListener('submit', createOrUpdateCustomer);

    function handleCustomerTableClick(event) {
      const ownersPaginationBtn = event.target.closest('button.owners-pagination-btn');
      if (ownersPaginationBtn) {
        const page = Number(ownersPaginationBtn.dataset.page);
        if (!Number.isNaN(page)) {
          customersOwnersCurrentPage = page;
          renderCustomersTable('owners');
        }
        return;
      }

      const plainPaginationBtn = event.target.closest('button.plain-customers-pagination-btn');
      if (plainPaginationBtn) {
        const page = Number(plainPaginationBtn.dataset.page);
        if (!Number.isNaN(page)) {
          customersPlainCurrentPage = page;
          renderCustomersTable('plain');
        }
        return;
      }

      const button = event.target.closest('button[data-action]');
      if (!button) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();

      const customerId = Number(button.dataset.customerId);
      if (!customerId) {
        return;
      }

      if (button.dataset.action === 'edit') {
        const customer = customersCache.find((item) => item.id === customerId);
        if (customer) {
          openCustomerModal('edit', customer);
        }
      }

      if (button.dataset.action === 'delete') {
        deleteCustomerFlow(customerId);
      }
    }

    customersBodyEl.addEventListener('click', handleCustomerTableClick);
    if (ownersBodyEl) ownersBodyEl.addEventListener('click', handleCustomerTableClick);

    confirmCancelEl.addEventListener('click', () => closeConfirm(false));
    confirmAcceptEl.addEventListener('click', () => closeConfirm(true));
    confirmOverlayEl.addEventListener('click', (event) => {
      if (event.target === confirmOverlayEl) {
        closeConfirm(false);
      }
    });

    logoutBtn.addEventListener('click', async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        window.location.href = '/login.html';
        return;
      }

      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } catch (error) {
      }

      localStorage.removeItem(TOKEN_KEY);
      window.location.href = '/login.html';
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && document.body.classList.contains('mobile-menu-open')) {
        event.preventDefault();
        closeMobileMenu();
        return;
      }

      if (confirmOverlayEl.classList.contains('show')) {
        trapModalFocus(event, confirmOverlayEl, confirmCancelEl, confirmAcceptEl, () => closeConfirm(false), () => closeConfirm(true));
        return;
      }

      if (customerModalEl.classList.contains('show')) {
        trapModalFocus(event, customerModalEl, firstNameEl, saveCustomerBtn, closeCustomerModal, () => saveCustomerBtn.click());
        return;
      }

      if (userModalEl.classList.contains('show')) {
        trapModalFocus(event, userModalEl, userNameInputEl, saveUserBtn, closeUserModal, () => saveUserBtn.click());
        return;
      }

      if (roleModalEl.classList.contains('show')) {
        const roleFirstFocusable = roleEditorToggleBtnEl || roleNameInputEl;
        const roleEditorOpen = roleEditorToggleBtnEl && roleEditorToggleBtnEl.getAttribute('aria-expanded') === 'true';
        const roleLastFocusable = roleEditorOpen ? saveRoleBtn : closeRoleModalBtn;
        trapModalFocus(event, roleModalEl, roleFirstFocusable, roleLastFocusable, closeRoleModal, () => {
          if (roleEditorOpen) {
            saveRoleBtn.click();
          } else if (roleEditorToggleBtnEl) {
            roleEditorToggleBtnEl.click();
          }
        });
        return;
      }

      if (projectModalEl.classList.contains('show')) {
        trapModalFocus(event, projectModalEl, projectNameInputEl, saveProjectBtn, closeProjectModal, () => saveProjectBtn.click());
        return;
      }

      if (unitModalEl.classList.contains('show')) {
        trapModalFocus(event, unitModalEl, unitProjectSelectEl, saveUnitBtn, closeUnitModal, () => saveUnitBtn.click());
      }
    });

    populateUserRoleFilterOptions();
    populateUserRoleOptions();
    renderRolePermissionsTable({});

    loadUserPrefs();
    startAutoThemeScheduler();

    async function initializeDashboard() {
      await loadMe();

      const _startView = getViewFromLocation();
      const _prefDefaultView = localStorage.getItem(DEFAULT_VIEW_KEY) || 'dashboard';
      switchView(_startView === 'dashboard' ? _prefDefaultView : _startView);
    }

    initializeDashboard();

