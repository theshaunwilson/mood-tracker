const User = require('../models/User');
const jwt = require('jsonwebtoken');

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.startsWith('Bearer ')) {
    req.token = authorization.replace('Bearer ', '');
  } else {
    req.token = null;
  }
  next();
};

const userExtractor = async (req, res, next) => {
  const token = req.token;

  if (!token) {
    return res.status(401).json({ error: 'token does not exist' });
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res.status(401).json({ error: 'token invalid' });
  }

  if (!decodedToken.id) {
    return res.status(401).json({ error: 'token invalid' });
  }

  const user = await User.findById(decodedToken.id);
  req.user = user;

  next();
};

module.exports = {
  tokenExtractor,
  userExtractor,
};
