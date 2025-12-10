// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

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

app.get('/', (req, res) => {
  res.json({ message: 'Mood tracker api' });
});

// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
