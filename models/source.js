// require db config
const db = require('../db/config');

// define source as object
const Source = {};

// find all
Source.findAll = (id) => {
  return db.query(`
    SELECT * FROM sources
    WHERE user_id = $1
  `, [id]);
};

// create
Source.create = (source) => {
  return db.one(`
    INSERT INTO sources
    (source, title, description, url, urlToImage, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `, [source.source, source.title, source.description, source.url, source.urlToImage, source.user_id]);
};

// find by id
Source.findById = (id) => {
  return db.oneOrNone(`
  SELECT * FROM sources
  WHERE id = $1
  `, [id]);
};

// destroy
Source.destroy = (id) => {
  return db.none(`
    DELETE FROM sources
    WHERE id = $1
  `, [id])
}

module.exports = Source;
