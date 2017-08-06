// Thanks and credit to J Silverstein for lessons on express auth

// require express
const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

// login
authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login', {
    currentPage: 'login',
  });
});

// register
authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register', {
    currentPage: 'register',
  });
});

// post register
authRouter.post('/register', usersController.create);

// post login
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

// logout
authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// export module
module.exports = authRouter;
