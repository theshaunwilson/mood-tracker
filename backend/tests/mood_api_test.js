const { test, after, beforeEach, describe } = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

const Mood = require('../models/Mood');
const User = require('../modles/User');
const listHelper = require('../utils/list_helper');
const helper = require('./test_helper');

beforeEach(async () => {
  await Mood.deleteMany({});
  await Mood.insertMany(helper.initialBlogs);
});
