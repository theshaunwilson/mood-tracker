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

let token = null;

beforeEach(async () => {
  await Mood.deleteMany({});
  await User.deleteMany({});

  const testUser = { email: 'test@test.com', password: 'testpassword' };
  await api.post('/api/auth/signup').send(testUser);
  const loginResponse = await api.post('/api/auth/login').send(testUser);
  token = loginResponse.body.token;
});

describe('mood api', () => {
  test('moods are returned as json', async () => {
    await api
      .get('/api/mood')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});

after(async () => {
  await mongoose.connection.close();
});
