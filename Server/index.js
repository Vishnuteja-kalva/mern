// const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Enhanced CORS configuration
const corsOptions = {
  origin: 'https://food-info-frontend.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// MongoDB connection with error handling
const MONGODB_URI = 'mongodb+srv://Vishnuteja:tejavishnuu@cluster0.j6ir4.mongodb.net/Userinfo?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import User model
const UserModel = require("./models/User");

// Login route with improved error handling and security
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Input validation
    if (!username || !password) {
      return res.status(400).json({ 
        message: "Username and password are required" 
      });
    }

    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ 
        message: "Record not found. Please register." 
      });
    }

    // In a production environment, you should use bcrypt to compare passwords
    if (user.password === password) {
      return res.status(200).json({ 
        message: "Success"
      });
    } else {
      return res.status(401).json({ 
        message: "Incorrect password" 
      });
    }
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ 
      message: "Server error",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Registration route with improved error handling
app.post('/', async (req, res) => {
  try {
    // Input validation
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ 
        message: "Username and password are required" 
      });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ 
        message: "Username already exists" 
      });
    }

    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ 
      message: "Server error",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: "Something broke!",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  mongoose.connection.close()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
});