// require express
const express = require('express');
const sourcesRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const sourcesController = require('../controllers/sources-controller');

const newsHelpers = require ('../services/news/news-helpers');


// root to go to index view with articles
sourcesRoutes.get('/', authHelpers.loginRequired, sourcesController.index);

// route for add view with selection of news sources
sourcesRoutes.get('/add', authHelpers.loginRequired, sourcesController.add);

// route to post call for news article
sourcesRoutes.post('/', authHelpers.loginRequired, newsHelpers.getNewsData, sourcesController.create);

// route for specific articles
sourcesRoutes.get('/:id', authHelpers.loginRequired, sourcesController.index);

// routes for delete method
sourcesRoutes.delete('/:id', authHelpers.loginRequired, sourcesController.delete);

// export module
module.exports = sourcesRoutes;
