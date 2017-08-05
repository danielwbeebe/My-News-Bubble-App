// require models/user and bcrypt package
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// define usersController as object
const usersController = {};

// if user is logged in, /user sends to user to sources/add page
usersController.index = (req, res) => {
  res.redirect('/sources/add');
};

// create users controller
usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
    email: req.body.email,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

// export module
module.exports = usersController;
