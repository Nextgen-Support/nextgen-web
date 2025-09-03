import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import testRoutes from './routes/test.js';

const envPath = path.resolve(process.cwd(), '.env.local');
console.log('Loading environment variables from:', envPath);

// Read and parse the .env.local file
const envFile = fs.readFileSync(envPath, 'utf-8');
const envVars = envFile.split('\n').reduce((acc, line) => {
  const match = line.match(/^([^=#]+)=([^#]*)/);
  if (match) {
    const key = match[1].trim();
    const value = match[2].trim().replace(/(^['"]|['"]$)/g, '');
    process.env[key] = value;
    acc[key] = value;
  }
  return acc;
}, {} as Record<string, string>);

console.log('Loaded environment variables:', Object.keys(envVars)); 

console.log('Environment variables:', {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
  HAS_OPENAI_KEY: !!process.env.OPENAI_API_KEY,
});

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '3001', 10);

// Middleware
app.use(cors<Request>());
app.use(express.json());

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Server error:', err);
  console.error('Environment variables:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT
  });
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Routes
app.use('/api/test', testRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
