const { test, after, beforeEach, describe } = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

const Mood = require('../models/Mood');
const User = require('../models/User');
const listHelper = require('../utils/list_helper');
const helper = require('./test_helper');

beforeEach(async () => {
  await Mood.deleteMany({});
  await User.deleteMany({});
  await Mood.insertMany(helper.initialMoods);

  const testUser = { email: 'test@test.com', password: 'testpassword' };
  await api.post('/api/auth/signup').send(testUser);
  const loginResponse = await api.post('/api/auth/login').send(testUser);
  token = loginResponse.body.token;
});
