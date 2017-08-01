// require express
const express = require('express');
const sourcesRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const sourcesController = require('../controllers/sources-controller');

// main root
sourcesRoutes.get('/', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.post('/', authHelpers.loginRequired, sourcesController.create);

// sourcesRoutes.get('/sources-add', authHelpers.loginRequired, sourcesController.create);
// sourcesRoutes.post('/sources-add', authHelpers.loginRequired, sourcesController.create);

// route to add view
sourcesRoutes.get('/add', authHelpers.loginRequired, sourcesController.add);


// routes for specific items - WILL DECIDE IF NEEDED
sourcesRoutes.get('/:id', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.get('/:id/edit', authHelpers.loginRequired, sourcesController.edit);
sourcesRoutes.put('/:id', authHelpers.loginRequired, sourcesController.update);
sourcesRoutes.delete('/:id', authHelpers.loginRequired, sourcesController.delete);

// export module
module.exports = sourcesRoutes;
