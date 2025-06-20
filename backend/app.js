const express = require('express');
const app = express();
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./config/db');

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
// CORS Middleware
const allowedOrigins = [
  "http://localhost:3000",
  "http://rahul-kaushik-portfolio.s3-website.ap-south-1.amazonaws.com"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use('/project', projectRoutes);
app.use('/user', userRoutes);

// Error handling middleware
app.use(require('./middlewares/errorHandler'));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
