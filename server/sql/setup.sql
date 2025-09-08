-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS nextgen_support CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Switch to the database
USE nextgen_support;

-- Create service_requests table
CREATE TABLE IF NOT EXISTS service_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  is_customer ENUM('yes', 'no') NOT NULL,
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'in_progress', 'resolved', 'closed') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create a user with appropriate privileges (update the password in production)
CREATE USER IF NOT EXISTS 'nextgen_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON nextgen_support.* TO 'nextgen_user'@'localhost';
FLUSH PRIVILEGES;
