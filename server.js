import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './server/routes/auth.js';
import userRoutes from './server/routes/users.js';
import courseRoutes from './server/routes/courses.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// For development without MongoDB installed, use a mock database setup
if (process.env.NODE_ENV === 'development' && !process.env.MONGODB_URI.includes('mongodb+srv')) {
  console.log('Running in development mode without MongoDB');
  // Setup mock data and routes that don't require database
  app.use('/api/auth/login', (req, res) => {
    // Mock login response
    res.status(200).json({
      success: true,
      token: 'mock-jwt-token',
      data: {
        _id: '123456789',
        name: 'Test User',
        email: req.body.email || 'test@example.com',
        role: 'student'
      }
    });
  });
  
  app.use('/api/auth/register', (req, res) => {
    // Mock register response
    res.status(201).json({
      success: true,
      token: 'mock-jwt-token',
      data: {
        _id: '123456789',
        name: req.body.name || 'New User',
        email: req.body.email || 'newuser@example.com',
        role: 'student'
      }
    });
  });
  
  app.use('/api/auth/me', (req, res) => {
    // Mock user data response
    res.status(200).json({
      success: true,
      data: {
        _id: '123456789',
        name: 'Test User',
        email: 'test@example.com',
        role: 'student'
      }
    });
  });
  
  app.use('/api/courses', (req, res) => {
    // Mock courses response
    res.status(200).json({
      success: true,
      count: 2,
      data: [
        {
          _id: 'course1',
          title: 'Introduction to Web Development',
          description: 'Learn the basics of web development',
          instructor: 'Instructor Name',
          price: 49.99,
          rating: 4.5
        },
        {
          _id: 'course2',
          title: 'Advanced JavaScript',
          description: 'Master JavaScript programming',
          instructor: 'Another Instructor',
          price: 69.99,
          rating: 4.8
        }
      ]
    });
  });
} else {
  // Connect to real MongoDB database
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/upgenz')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('UpgenZ API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});