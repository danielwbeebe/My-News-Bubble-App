// Thanks and credit to J Silverstein for lessons on express auth

// require db config
const db = require('../db/config');

// define user as object
const User = {};

// find user
User.findByUserName = (username) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [username]);
};

// create user
User.create = (user) => {
  return db.one(`
    INSERT INTO users
    (username, password_digest, email)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [user.username, user.password_digest, user.email]);
};

// export module
module.exports = User;
