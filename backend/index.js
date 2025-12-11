// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const authMiddlewear = require('./middlewear/authMiddlewear');
const connectDB = require('./config/db');

// Route Imports
const authRoutes = require('./routes/authRoutes');
const moodRoutes = require('./routes/moodRoutes');

// Connect to database
connectDB();

// Middlewear
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(authMiddlewear.tokenExtractor);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/mood', authMiddlewear.userExtractor, moodRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Mood tracker api' });
});

// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
