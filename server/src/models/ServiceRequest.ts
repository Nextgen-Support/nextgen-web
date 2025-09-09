import pool from '../config/db';

export interface ServiceRequest {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: 'new' | 'in_progress' | 'resolved' | 'closed';
  created_at?: Date;
  updated_at?: Date;
}

export const createServiceRequest = async (request: Omit<ServiceRequest, 'id' | 'status' | 'created_at' | 'updated_at'>): Promise<ServiceRequest> => {
  const [result] = await pool.execute(
    `INSERT INTO service_requests 
     (name, email, phone, subject, message) 
     VALUES (:name, :email, :phone, :subject, :message)`,
    request
  ) as any;

  const [rows] = await pool.query(
    'SELECT * FROM service_requests WHERE id = ?',
    [result.insertId]
  ) as any;

  return rows[0];
};

export const getServiceRequestById = async (id: number): Promise<ServiceRequest | null> => {
  const [rows] = await pool.query(
    'SELECT * FROM service_requests WHERE id = ?',
    [id]
  ) as any;
  
  return rows.length ? rows[0] : null;
};

export const getAllServiceRequests = async (): Promise<ServiceRequest[]> => {
  const [rows] = await pool.query(
    'SELECT * FROM service_requests ORDER BY created_at DESC'
  ) as any;
  
  return rows;
};
