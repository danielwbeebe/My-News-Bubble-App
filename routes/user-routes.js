// require express
const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

// get
userRoutes.get('/', authHelpers.loginRequired, usersController.index);

// export module
module.exports = userRoutes;
