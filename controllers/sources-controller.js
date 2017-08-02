// require models/source
const Source = require('../models/source');

// defining sources controller as object
const sourcesController = {};

// GO TO INDEX PAGE
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

// controller that brings user to the add view
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

// controller to create new row in table
sourcesController.create = (req, res) => {
  console.log(req);
  Source.create({
    source: req.body.newsSource,
    user_id: req.user.id,
  }).then(source => {
    console.log(source);
    res.redirect('/sources/');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

// EDIT CONTROLLER
sourcesController.edit = (req, res) => {

  Source.findById(req.params.id)
    .then(source => {
      res.render('sources/sources-edit', {
        source: source,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

// update - CONSIDER DELETING
sourcesController.update = (req, res) => {
  Source.update({
    source: req.body.source,
    user_id: req.user.id,
  }, req.params.id).then(source => {
    res.redirect('/sources');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

// delete
sourcesController.delete = (req, res) => {
  Source.destroy(req.params.id)
    .then(() => {
      res.redirect('/sources');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

// export module
module.exports = sourcesController;
