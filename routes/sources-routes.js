// require express
const express = require('express');
const sourcesRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const sourcesController = require('../controllers/sources-controller');

const newsHelpers = require ('../services/news/news-helpers');

// main root
sourcesRoutes.get('/', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.post('/', authHelpers.loginRequired, newsHelpers.getNewsData, sourcesController.create);

// route for add view
sourcesRoutes.get('/add', authHelpers.loginRequired, sourcesController.add);

// routes for specific items
sourcesRoutes.get('/:id', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.delete('/:id', authHelpers.loginRequired, sourcesController.delete);

// export module
module.exports = sourcesRoutes;
