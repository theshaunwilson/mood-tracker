// Imports

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');

const authRoutes = require('./routes/authRoutes');
const moodRoutes = require('./routes/moodRoutes');

const app = express();

mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info('Connected to MongoDB'))
  .catch((error) => logger.error('Error connecting to mongoDB'));

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/mood', authMiddlewear.userExtractor, moodRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Mood tracker api' });
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
