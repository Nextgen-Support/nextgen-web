import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';
import 'winston-daily-rotate-file';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { combine, timestamp, printf, colorize, align } = winston.format;

// Define log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
  const formattedMessage = stack || message;
  return `${timestamp} ${level}: ${formattedMessage}`;
});

// Create logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    logFormat,
    process.env.NODE_ENV === 'production' 
      ? winston.format.uncolorize() 
      : winston.format.colorize()
  ),
  transports: [
    // Console transport
    new winston.transports.Console({
      format: combine(colorize({ all: true }))
    })
  ]
});

// Add file transport in production or if LOG_TO_FILE is true
if (process.env.NODE_ENV === 'production' || process.env.LOG_TO_FILE === 'true') {
  logger.add(new winston.transports.DailyRotateFile({
    filename: path.join(__dirname, '../../logs/application-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: combine(
      timestamp(),
      winston.format.json()
    )
  }));
}

// Create a stream object for morgan
logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  }
};

export default logger;
