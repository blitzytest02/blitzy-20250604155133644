// Section 1 - Dependencies and Configuration
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Section 2 - Middleware Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Optional: Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Section 3 - Route Handlers
// GET / endpoint - Returns "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// GET /evening endpoint - Returns "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Section 4 - Error Handling
// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Section 5 - Server Initialization
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
