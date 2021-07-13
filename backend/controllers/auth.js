const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { Admin } = require('../models/admin');

const saltRounds = 10;
dotenv.config();

function generateAccessToken(email) {
  return jwt.sign(email, process.env.TOKEN_SECRET);
}

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
  if (token == null) return res.sendStatus(401)
  
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

exports.checkPasswordAndLogin = (email, password, hash, next) => {
  bcrypt.compare(password, hash, (error, result) => {
    if (result === true) {
      const token = generateAccessToken(email);
      next(token);
    } else {
      return null;
    }
  })
};

exports.registerAdmin = (email, password) => {
  bcrypt.hash(password, saltRounds, function(err, hash) {
    const admin = new Admin({
      email: email,
      password: hash,
    })

    admin.save((err) => {
      console.log('there was an error', err)
    })

  });
}

module.exports.generateAccessToken = generateAccessToken
