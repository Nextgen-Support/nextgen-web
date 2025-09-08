import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  try {
    // Read the SQL file
    const sqlFilePath = path.join(__dirname, '..', 'sql', 'setup.sql');
    const sql = await fs.readFile(sqlFilePath, 'utf8');

    // Create a connection to MySQL server
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      multipleStatements: true
    });

    console.log('Connected to MySQL server');

    // Execute the SQL script
    await connection.query(sql);
    console.log('Database and tables created successfully');

    // Close the connection
    await connection.end();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

run();
