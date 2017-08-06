// // require express
const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

// sends logged in user to usersController - then sent to sources-add page
userRoutes.get('/', authHelpers.loginRequired, usersController.index);

// export module
module.exports = userRoutes;
