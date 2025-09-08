import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import logger from '../utils/logger.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  DB_HOST = 'localhost',
  DB_PORT = 3306,
  DB_USER = 'root',
  DB_PASSWORD = '',
  DB_NAME = 'nextgen_support',
  NODE_ENV = 'development'
} = process.env;

async function run() {
  try {
    // Create a connection without specifying the database first
    const connection = await mysql.createConnection({
      host: DB_HOST,
      port: parseInt(DB_PORT, 10),
      user: DB_USER,
      password: DB_PASSWORD,
      multipleStatements: true
    });

    logger.info('✅ Connected to MySQL server');

    // Read the SQL file
    const sqlFilePath = path.join(__dirname, '..', 'sql', 'setup.sql');
    const sql = await fs.readFile(sqlFilePath, 'utf8');

    // Execute the SQL to create database and tables
    await connection.query(sql);
    logger.info(`✅ Successfully initialized database '${DB_NAME}'`);

    // Close the connection
    await connection.end();
    logger.info('✅ Database initialization completed successfully');
  } catch (error) {
    logger.error('❌ Error initializing database:', error);
    process.exit(1);
  }
}

// Run the script
run();
