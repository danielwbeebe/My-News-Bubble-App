// require express
const express = require('express');
const sourcesRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const sourcesController = require('../controllers/sources-controller');

// main root
sourcesRoutes.get('/', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.post('/', authHelpers.loginRequired, sourcesController.create);

// sources-index
sourcesRoutes.get('/sources-index', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.post('/sources-index', authHelpers.loginRequired, sourcesController.create);

// sources-add to allow editing - ADDED TO TRY TO NAVIGATE TO EDIT PAGE
sourcesRoutes.get('/sources-add', authHelpers.loginRequired, sourcesController.create);

// sourcesRoutes.get('/sources-edit', authHelpers.loginRequired, sourcesController.edit);


sourcesRoutes.get('/:id', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.get('/:id/sources-edit', authHelpers.loginRequired, sourcesController.edit);
sourcesRoutes.put('/:id', authHelpers.loginRequired, sourcesController.update);
sourcesRoutes.delete('/:id', authHelpers.loginRequired, sourcesController.delete);

// export module
module.exports = sourcesRoutes;
