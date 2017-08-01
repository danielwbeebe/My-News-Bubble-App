// require express
const express = require('express');
const getnewsRouter = express.Router();
const getnewsHelper = require('../services/getnews/getnews-helper');
const getNewsController = require('../controllers/getnews-controller');

// get
getnewsRouter.get('/', getnewsHelper.getNews, getNewsController.index);

// export module
module.exports = getnewsRouter;
