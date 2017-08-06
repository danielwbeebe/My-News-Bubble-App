// require models/source
const Source = require('../models/source');
require('isomorphic-fetch');

// defining sources controller as object
const sourcesController = {};

// index - shows page with the news articles
sourcesController.index = (req, res) => {
  Source.findAll(req.user.id)
    .then(sources => {
      res.render('sources/sources-index', {
        data: sources,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

// controller that brings user to the add view after logging in
sourcesController.add = (req, res) => {
  Source.findById(req.params.id)
    .then(source => {
      res.render('sources/sources-add', {
        source: source,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

// controller to add new article - new row in db table in models/source create method
sourcesController.create = (req, res) => {

  // getting news from API - call made in news-helpers.js
    Source.create({
    source: req.body.newsSource,
    title: res.locals.title,
    description: res.locals.description,
    url: res.locals.url,
    urlToImage: res.locals.urlToImage,
    user_id: req.user.id
  }, console.log(res.locals.urlToImage)).then(source => {
    console.log(source);
    res.redirect('/sources/sources-add');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

// delete - keeps user on the index page with news articles
sourcesController.delete = (req, res) => {
  Source.destroy(req.params.id)
    .then(() => {
      res.redirect('/sources/index');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

// export module
module.exports = sourcesController;
