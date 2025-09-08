const { exec } = require('child_process');
const path = require('path');
const { promisify } = require('util');

const execAsync = promisify(exec);

async function startServers() {
  console.log('🚀 Starting development servers...');
  
  // Start the backend server
  const backendProcess = execAsync('npm run dev', {
    cwd: path.join(__dirname, 'server'),
    stdio: 'inherit'
  });

  // Start the frontend development server
  const frontendProcess = execAsync('npm run dev', {
    cwd: path.join(__dirname, 'client'),
    stdio: 'inherit'
  });

  // Handle process termination
  const handleExit = async () => {
    console.log('\n🛑 Shutting down servers...');
    try {
      await Promise.all([
        execAsync('taskkill /F /IM node.exe', { windowsHide: true })
      ]);
      process.exit(0);
    } catch (error) {
      console.error('Error shutting down servers:', error);
      process.exit(1);
    }
  };

  // Handle process termination signals
  process.on('SIGINT', handleExit);
  process.on('SIGTERM', handleExit);

  // Log server URLs
  console.log('\n🌐 Servers are running:');
  console.log('  Frontend: http://localhost:5173');
  console.log('  Backend:  http://localhost:5000');
  console.log('\nPress Ctrl+C to stop both servers');
}

startServers().catch(console.error);
