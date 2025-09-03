import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Router, Request, Response } from 'express';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../../.env.local') });

const router = Router();

// Type for the response
interface EnvResponse {
  env: {
    NODE_ENV: string | undefined;
  };
  time: string;
}

router.get('/', (_req: Request, res: Response) => {
  // Log environment variables
  console.log('Environment variables:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL
  });

  const response: EnvResponse = {
    env: {
      NODE_ENV: process.env.NODE_ENV
    },
    time: new Date().toISOString(),
  };
  
  res.json(response);
});

export default router;
