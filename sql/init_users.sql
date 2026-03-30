CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(191) NOT NULL UNIQUE,
  phone VARCHAR(30) NULL,
  role VARCHAR(30) NOT NULL DEFAULT 'user',
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_users_name (name),
  UNIQUE KEY uq_users_phone (phone)
);

CREATE TABLE IF NOT EXISTS revoked_tokens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  token_hash CHAR(64) NOT NULL UNIQUE,
  expires_at DATETIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_revoked_tokens_expires_at (expires_at)
);

CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS units (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT NOT NULL,
  label VARCHAR(80) NOT NULL,
  sale_status VARCHAR(20) NOT NULL DEFAULT 'available',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_units_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  UNIQUE KEY uq_units_project_label (project_id, label)
);

CREATE TABLE IF NOT EXISTS customers (
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
);

CREATE TABLE IF NOT EXISTS support_tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_support_tags_name (name)
);

CREATE TABLE IF NOT EXISTS support_tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(140) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  email VARCHAR(191) NOT NULL,
  description TEXT NOT NULL,
  tag_id INT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'open',
  note TEXT NULL,
  closed_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_support_tickets_tag FOREIGN KEY (tag_id) REFERENCES support_tags(id) ON DELETE SET NULL,
  INDEX idx_support_tickets_status (status),
  INDEX idx_support_tickets_created_at (created_at)
);

INSERT IGNORE INTO support_tags (name) VALUES
  ('Bilgi İstiyor'),
  ('Muhasebesel Sorun'),
  ('Teknik Destek');
