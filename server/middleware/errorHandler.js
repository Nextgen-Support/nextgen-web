import logger from '../utils/logger.js';

/**
 * Custom error class for API errors
 */
class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Global error handling middleware
 */
const errorHandler = (err, req, res, next) => {
  // Set default values if not provided
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Log error in development
  if (process.env.NODE_ENV === 'development') {
    logger.error('Error Stack:', err.stack);
  }

  // Handle specific error types
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input data: ${errors.join('. ')}`;
    return res.status(400).json({
      status: 'fail',
      message,
      errors: errors
    });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid token. Please log in again!'
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      status: 'fail',
      message: 'Your token has expired! Please log in again.'
    });
  }

  // Handle duplicate field errors
  if (err.code === 11000) {
    const value = err.errmsg.match(/(["'])(\\.|.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return res.status(400).json({
      status: 'fail',
      message
    });
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid token. Please log in again!'
    });
  }

  // Handle cast errors (e.g., invalid ObjectId)
  if (err.name === 'CastError') {
    const message = `Invalid ${err.path}: ${err.value}`;
    return res.status(400).json({
      status: 'fail',
      message
    });
  }

  // Send error response
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

export { ApiError, errorHandler };
