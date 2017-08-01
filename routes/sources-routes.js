// require express
const express = require('express');
const sourcesRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const sourcesController = require('../controllers/sources-controller');

// get and post for verification
sourcesRoutes.get('/', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.post('/', authHelpers.loginRequired, sourcesController.create);

// new
sourcesRoutes.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('sources/sources-add', {
    currentPage: 'add',
  });
});

sourcesRoutes.get('/:id', authHelpers.loginRequired, sourcesController.index);
sourcesRoutes.get('/:id/edit', authHelpers.loginRequired, sourcesController.edit);
sourcesRoutes.put('/:id', authHelpers.loginRequired, sourcesController.update);
sourcesRoutes.delete('/:id', authHelpers.loginRequired, sourcesController.delete);

// export module
module.exports = sourcesRoutes;
