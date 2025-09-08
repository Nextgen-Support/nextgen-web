import mysql from 'mysql2/promise';
import logger from '../utils/logger.js';

const {
  DB_HOST = 'localhost',
  DB_PORT = 3306,
  DB_USER = 'root',
  DB_PASSWORD = '',
  DB_NAME = 'nextgen_support',
  DB_CONNECTION_LIMIT = 10,
  DB_QUEUE_LIMIT = 0,
  NODE_ENV = 'development'
} = process.env;

// Create a connection pool to the MySQL server
const pool = mysql.createPool({
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: parseInt(DB_CONNECTION_LIMIT, 10),
  queueLimit: parseInt(DB_QUEUE_LIMIT, 10),
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000, // 10 seconds
  timezone: 'local',
  charset: 'utf8mb4_unicode_ci',
  multipleStatements: true,
  typeCast: (field, next) => {
    // Convert TINY(1) to boolean
    if (field.type === 'TINY' && field.length === 1) {
      return field.string() === '1';
    }
    return next();
  }
});

// Test the connection on startup
pool.getConnection()
  .then(connection => {
    logger.info('✅ Connected to MySQL database');
    connection.release();
  })
  .catch(error => {
    logger.error('❌ Error connecting to MySQL database:', error);
    // Don't exit the process in development to allow for auto-restart
    if (NODE_ENV === 'production') {
      process.exit(1);
    }
  });

// Handle connection errors
pool.on('error', (err) => {
  logger.error('MySQL pool error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    logger.warn('Database connection was closed.');
  } else if (err.code === 'ER_CON_COUNT_ERROR') {
    logger.warn('Database has too many connections.');
  } else if (err.code === 'ECONNREFUSED') {
    logger.error('Database connection was refused.');
  } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
    logger.error('Access denied for user. Check your database credentials.');
  } else if (err.code === 'ER_BAD_DB_ERROR') {
    logger.error(`Database '${DB_NAME}' does not exist.`);
  } else {
    logger.error('Unhandled database error:', err);
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  try {
    await pool.end();
    logger.info('Database connection pool closed.');
    process.exit(0);
  } catch (error) {
    logger.error('Error closing database connections:', error);
    process.exit(1);
  }
});

export default pool;
