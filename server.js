const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint 1: Root status check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'API is running successfully' });
});

// Endpoint 2: Health check
app.get('/health', (req, res) => {
  res.status(200).json({ health: 'OK' });
});

// Only start server if not required as a test module
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;

