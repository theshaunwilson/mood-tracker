const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const newUser = await User.create({
      email,
      password,
    });

    newUser.password = undefined;
    res.json({ user: newUser });
  } catch (error) {
    console.error('Signup error', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'Invalid email or password' });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(401).json({
        error: 'Invalid email or password',
      });
    }

    const userForToken = {
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: 60 * 60,
    });

    res.status(200).send({ token });
  } catch (error) {
    console.error('login error', error);
    res.status(500).json({ error: 'Server error' });
  }
};
