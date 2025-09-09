import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServers() {
  console.log('🚀 Starting development servers...');
  
  // Start the backend server
  console.log('Starting backend server...');
  const backendProcess = execAsync('npm run dev', {
    cwd: join(__dirname, 'server'),
    stdio: 'inherit'
  });

  // Start the frontend development server
  console.log('Starting frontend server...');
  const frontendProcess = execAsync('npm run dev', {
    cwd: join(__dirname, 'client'),
    stdio: 'inherit'
  });

  try {
    await Promise.all([backendProcess, frontendProcess]);
  } catch (error) {
    console.error('❌ Error starting servers:', error);
    process.exit(1);
  }
}

startServers().catch(console.error);
