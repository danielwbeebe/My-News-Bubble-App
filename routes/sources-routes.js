// require express
const express = require('express');
const sourcesRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const sourcesController = require('../controllers/sources-controller');

// get and post for verification
sourcesRouter.get('/', authHelpers.loginRequired, sourcesController.index);
sourcesRouter.post('/', authHelpers.loginRequired, sourcesController.create);

// new
sourcesRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('sources/sources-add');
});

sourcesRouter.get('/:id', authHelpers.loginRequired, sourcesController.show);
sourcesRouter.get('/:id/edit', authHelpers.loginRequired, sourcesController.edit);
sourcesRouter.put('/:id', authHelpers.loginRequired, sourcesController.update);
sourcesRouter.delete('/:id', authHelpers.loginRequired, sourcesController.delete);

// export module
module.exports = sourcesRouter;
