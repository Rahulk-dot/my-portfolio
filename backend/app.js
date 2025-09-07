const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const educationRoutes = require('./routes/educationRoutes');
const contactRoutes = require('./routes/contactRoutes');
const aboutMeRoutes = require('./routes/aboutMeRoutes');
const { connectDB } = require('./config/db');

// Connect to the database
connectDB();

// Routes
// CORS Middleware
const allowedOrigins = [
  'http://localhost:3000',
  'http://rahulkaushik.in.s3-website.ap-south-1.amazonaws.com',
  'https://rahulkaushik.in',
  'https://www.rahulkaushik.in'
];

// CORS config
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow request
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions)); // Use cors middleware

// Middleware
app.use(express.json());

// Serve static files from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/project', projectRoutes);
app.use('/user', userRoutes);
app.use('/education', educationRoutes);
app.use('/contact', contactRoutes);
app.use('/about-me', aboutMeRoutes);

// Error handling middleware
app.use(require('./middlewares/errorHandler'));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
