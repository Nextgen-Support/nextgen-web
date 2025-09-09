import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5001; // Different port for testing

// Simple CORS middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log('Origin:', req.headers.origin);
  next();
});

// Enable CORS for all routes
app.use(cors({
  origin: true, // Reflect the request origin
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 204,
  maxAge: 600
}));

// Test endpoint
app.get('/test', (req, res) => {
  res.json({
    message: 'CORS test successful!',
    timestamp: new Date().toISOString(),
    headers: req.headers
  });
});

// Handle preflight for all routes
app.options('*', cors());

app.listen(PORT, () => {
  console.log(`Test CORS server running on http://localhost:${PORT}`);
  console.log('Test endpoint: http://localhost:5001/test');
});
