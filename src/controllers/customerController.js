const {
  listCustomers,
  getCustomerSummary,
  listInventory,
  findCustomerDuplicates,
  createCustomer,
  updateCustomer,
  deleteCustomer
} = require('../models/customerModel');
const { writeAuditLog } = require('../models/auditLogModel');

function actorFromReq(req) {
  return {
    userId:    req.user && req.user.userId ? req.user.userId : null,
    userEmail: req.user && req.user.email  ? req.user.email  : 'sistem'
  };
}

function normalizeCustomerBody(body) {
  return {
    firstName: typeof body.firstName === 'string' ? body.firstName.trim() : '',
    lastName: typeof body.lastName === 'string' ? body.lastName.trim() : '',
    identityNumber: typeof body.identityNumber === 'string' ? body.identityNumber.trim() : '',
    birthDate: typeof body.birthDate === 'string' ? body.birthDate.trim() : '',
    occupation: typeof body.occupation === 'string' ? body.occupation.trim() : '',
    phonePrimary: typeof body.phonePrimary === 'string' ? body.phonePrimary.trim() : '',
    phoneSecondary: typeof body.phoneSecondary === 'string' ? body.phoneSecondary.trim() : '',
    email: typeof body.email === 'string' ? body.email.trim().toLowerCase() : '',
    address: typeof body.address === 'string' ? body.address.trim() : '',
    detailDescription: typeof body.detailDescription === 'string' ? body.detailDescription.trim() : '',
    referenceName: typeof body.referenceName === 'string' ? body.referenceName.trim().slice(0, 120) : '',
    referralSource: typeof body.referralSource === 'string' ? body.referralSource.trim().slice(0, 120) : '',
    customerType: typeof body.customerType === 'string' ? body.customerType.trim() : '',
    projectId: body.projectId ? Number(body.projectId) : null,
    unitId: body.unitId ? Number(body.unitId) : null,
    assignmentStatus: typeof body.assignmentStatus === 'string' ? body.assignmentStatus.trim() : ''
  };
}

function validateCustomerPayload(payload) {
  const requiredFields = [
    ['firstName', 'İsim alanı boş bırakılamaz'],
    ['lastName', 'Soyisim alanı boş bırakılamaz'],
    ['identityNumber', 'TC Kimlik No alanı boş bırakılamaz'],
    ['birthDate', 'Doğum Tarihi alanı boş bırakılamaz'],
    ['occupation', 'Meslek alanı boş bırakılamaz'],
    ['phonePrimary', 'Telefon 1 alanı boş bırakılamaz'],
    ['email', 'Email Adresi alanı boş bırakılamaz'],
    ['address', 'Adres alanı boş bırakılamaz'],
    ['customerType', 'Müşteri Tipi seçilmelidir']
  ];

  for (const [field, message] of requiredFields) {
    if (!payload[field]) {
      return message;
    }
  }

  if (!/^\d{11}$/.test(payload.identityNumber)) {
    return 'TC Kimlik No tam olarak 11 haneli olmalıdır';
  }

  if (!['project', 'housing'].includes(payload.customerType)) {
    return 'Müşteri Tipi geçersizdir (proje veya konut seçin)';
  }

  if (payload.projectId && (!Number.isInteger(payload.projectId) || payload.projectId <= 0)) {
    return 'Proje seçimi geçersizdir';
  }

  if (payload.unitId && (!Number.isInteger(payload.unitId) || payload.unitId <= 0)) {
    return 'Konut seçimi geçersizdir';
  }

  if (payload.unitId && !['sold', 'optioned'].includes(payload.assignmentStatus || '')) {
    return 'Konut seçtiğinizde Satış Durumu (Opsiyonlandı veya Satıldı) seçilmelidir';
  }

  return null;
}

function handleModelError(res, error, fallbackMessage) {
  if (error.code === 'ER_DUP_ENTRY') {
    if (error.message.includes('identityNumber') || error.message.includes('uq_customers_identity_number')) {
      return res.status(409).json({ message: 'Bu TC Kimlik No ile zaten bir müşteri kaydedilmiştir' });
    } else if (error.message.includes('email') || error.message.includes('uq_customers_email')) {
      return res.status(409).json({ message: 'Bu Email adresi ile zaten bir müşteri kaydedilmiştir' });
    } else if (error.message.includes('unitId') || error.message.includes('uq_customers_unit_id')) {
      return res.status(409).json({ message: 'Bu konut zaten başka bir müşteriye atanmıştır' });
    } else if (error.message.includes('uq_customers_full_name')) {
      return res.status(409).json({ message: 'Aynı isim ve soyisim ile kayıtlı bir müşteri zaten var' });
    } else if (error.message.includes('uq_customers_phone_primary')) {
      return res.status(409).json({ message: 'Telefon 1 numarası başka bir müşteride kayıtlı' });
    } else if (error.message.includes('uq_customers_phone_secondary')) {
      return res.status(409).json({ message: 'Telefon 2 numarası başka bir müşteride kayıtlı' });
    }
    return res.status(409).json({ message: 'Girilen bilgiler ile zaten bir kayıt mevcut' });
  }

  if (error.message) {
    const errorMap = {
      'project selection is required before unit selection': 'Konut seçmeden önce proje seçmelisiniz',
      'selected project was not found': 'Seçilen proje sistemde bulunamadı',
      'selected unit was not found': 'Seçilen konut sistemde bulunamadı',
      'selected unit does not belong to selected project': 'Seçilen konut bu projeye ait değildir',
      'selected unit is already assigned': 'Seçilen konut zaten başka bir müşteriye atanmıştır'
    };

    if (errorMap[error.message]) {
      return res.status(400).json({ message: errorMap[error.message] });
    }
  }

  return res.status(500).json({ message: fallbackMessage, error: error.message });
}

function getCustomerDuplicateMessage(payload, duplicates) {
  for (const item of duplicates) {
    if (item.firstName === payload.firstName && item.lastName === payload.lastName) {
      return 'Aynı isim ve soyisim ile kayıtlı bir müşteri zaten var';
    }

    if (item.identityNumber === payload.identityNumber) {
      return 'Bu TC Kimlik No ile zaten bir müşteri kaydedilmiştir';
    }

    if ((item.email || '').toLowerCase() === payload.email) {
      return 'Bu Email adresi ile zaten bir müşteri kaydedilmiştir';
    }

    if (payload.phonePrimary && (item.phonePrimary === payload.phonePrimary || item.phoneSecondary === payload.phonePrimary)) {
      return 'Telefon 1 numarası başka bir müşteride kayıtlı';
    }

    if (payload.phoneSecondary && (item.phonePrimary === payload.phoneSecondary || item.phoneSecondary === payload.phoneSecondary)) {
      return 'Telefon 2 numarası başka bir müşteride kayıtlı';
    }
  }

  return 'Girilen bilgiler ile zaten bir müşteri kaydı mevcut';
}

async function customerSummary(req, res) {
  try {
    const summary = await getCustomerSummary();
    return res.status(200).json({ message: 'customer summary ready', summary });
  } catch (error) {
    return res.status(500).json({ message: 'customer summary failed', error: error.message });
  }
}

async function customerInventory(req, res) {
  try {
    const inventory = await listInventory();
    return res.status(200).json({ message: 'customer inventory ready', inventory });
  } catch (error) {
    return res.status(500).json({ message: 'customer inventory failed', error: error.message });
  }
}

async function customerList(req, res) {
  try {
    const customers = await listCustomers();
    return res.status(200).json({ message: 'customer list ready', customers });
  } catch (error) {
    return res.status(500).json({ message: 'customer list failed', error: error.message });
  }
}

async function customerCreate(req, res) {
  const payload = normalizeCustomerBody(req.body);
  const validationError = validateCustomerPayload(payload);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const duplicates = await findCustomerDuplicates(payload);
  if (duplicates.length) {
    return res.status(409).json({ message: getCustomerDuplicateMessage(payload, duplicates) });
  }

  try {
    const customer = await createCustomer(payload);
    const actor = actorFromReq(req);
    writeAuditLog({ ...actor, action: 'create', entity: 'customer', entityId: customer.id, detail: `${payload.firstName} ${payload.lastName}` }).catch(() => {});
    return res.status(201).json({ message: 'Müşteri başarıyla eklendi', customer });
  } catch (error) {
    return handleModelError(res, error, 'Müşteri eklenemedi');
  }
}

async function customerUpdate(req, res) {
  const customerId = Number(req.params.id);
  if (!Number.isInteger(customerId) || customerId <= 0) {
    return res.status(400).json({ message: 'Geçersiz müşteri numarası' });
  }

  const payload = normalizeCustomerBody(req.body);
  const validationError = validateCustomerPayload(payload);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const duplicates = await findCustomerDuplicates(payload, customerId);
  if (duplicates.length) {
    return res.status(409).json({ message: getCustomerDuplicateMessage(payload, duplicates) });
  }

  try {
    const customer = await updateCustomer(customerId, payload);
    if (!customer) {
      return res.status(404).json({ message: 'Müşteri bulunamadı' });
    }

    const actor = actorFromReq(req);
    writeAuditLog({ ...actor, action: 'update', entity: 'customer', entityId: customerId, detail: `${payload.firstName} ${payload.lastName}` }).catch(() => {});
    return res.status(200).json({ message: 'Müşteri başarıyla güncellendi', customer });
  } catch (error) {
    return handleModelError(res, error, 'Müşteri güncellenemedi');
  }
}

async function customerDelete(req, res) {
  const customerId = Number(req.params.id);
  if (!Number.isInteger(customerId) || customerId <= 0) {
    return res.status(400).json({ message: 'Geçersiz müşteri numarası' });
  }

  try {
    const deleted = await deleteCustomer(customerId);
    if (!deleted) {
      return res.status(404).json({ message: 'Müşteri bulunamadı' });
    }

    const actor = actorFromReq(req);
    writeAuditLog({ ...actor, action: 'delete', entity: 'customer', entityId: customerId, detail: null }).catch(() => {});
    return res.status(200).json({ message: 'Müşteri başarıyla silindi' });
  } catch (error) {
    return res.status(500).json({ message: 'Müşteri silinemedi', error: error.message });
  }
}

module.exports = {
  customerSummary,
  customerInventory,
  customerList,
  customerCreate,
  customerUpdate,
  customerDelete
};