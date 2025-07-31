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
app.use(cors({
  origin: true, // Allow requests from any origin with credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());

// Connect to MongoDB
// For development without MongoDB installed, use a mock database setup
if (process.env.NODE_ENV === 'development' && !process.env.MONGODB_URI.includes('mongodb+srv')) {
  console.log('Running in development mode without MongoDB');
  // Setup mock data and routes that don't require database
  app.use('/api/auth/login', (req, res) => {
    // Mock login response
    const { email, password } = req.body;
    
    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }
    
    // Mock credentials check
    if (email === 'test@example.com' && password === 'password123') {
      return res.status(200).json({
        success: true,
        token: 'mock-jwt-token',
        user: {
          id: '123456789',
          firstName: 'Test',
          lastName: 'User',
          email: email,
          role: 'user'
        }
      });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
  
  app.use('/api/auth/register', (req, res) => {
    // Mock register response
    const { firstName, lastName, email, password } = req.body;
    
    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }
    
    // Mock email check
    if (email === 'test@example.com') {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }
    
    res.status(201).json({
      success: true,
      token: 'mock-jwt-token',
      user: {
        id: '123456789',
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: 'user'
      }
    });
  });
  
  app.use('/api/auth/me', (req, res) => {
    // Check for authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route'
      });
    }
    
    // Mock user data response
    res.status(200).json({
      success: true,
      data: {
        _id: '123456789',
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        role: 'user'
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