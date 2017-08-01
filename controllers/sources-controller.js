// require models/source
const Source = require('../models/source');

// defining sources controller as object
const sourcesController = {};

// index
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

// create
sourcesController.create = (req, res) => {
  Source.create({
    source: req.body.source,
    user_id: req.user.id,
  }).then(source => {
    console.log(source);
    res.redirect('/sources');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

// edit
sourcesController.edit = (req, res) => {
  // console.log('wtf mate?')
  // res.render('sources/sources-edit', {})
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

// update
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
