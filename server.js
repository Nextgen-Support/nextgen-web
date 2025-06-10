const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Ensure we're in the correct directory
const __dirname = path.resolve();

// Serve static files from the 'dist' directory
app.use('/', serveStatic(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
