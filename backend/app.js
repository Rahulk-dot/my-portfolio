const express = require('express');
const app = express();
const projectRoutes = require('./routes/projectRoutes');
const { connectDB } = require('./config/db');

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/project', projectRoutes);

// Error handling middleware
app.use(require('./middlewares/errorHandler'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
