const db = require('../config/db');

const ServiceRequest = {
  // Create a new service request
  async create(serviceRequest) {
    const [result] = await db.query(
      `INSERT INTO service_requests 
       (name, email, phone, is_customer, subject, message, status, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, 'new', NOW())`,
      [
        serviceRequest.name,
        serviceRequest.email,
        serviceRequest.phone,
        serviceRequest.isCustomer,
        serviceRequest.subject,
        serviceRequest.message
      ]
    );
    return result.insertId;
  },

  // Get all service requests (for admin)
  async findAll() {
    const [rows] = await db.query('SELECT * FROM service_requests ORDER BY created_at DESC');
    return rows;
  },

  // Get a single service request by ID
  async findById(id) {
    const [rows] = await db.query('SELECT * FROM service_requests WHERE id = ?', [id]);
    return rows[0];
  },

  // Update a service request status
  async updateStatus(id, status) {
    const [result] = await db.query(
      'UPDATE service_requests SET status = ? WHERE id = ?',
      [status, id]
    );
    return result.affectedRows > 0;
  }
};

module.exports = ServiceRequest;
