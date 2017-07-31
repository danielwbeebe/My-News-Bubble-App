// Creating constant variable options
const options = {
  query: (e) => {
    console.log(e.query);
  },
};

// requiring pg-promise
const pgp = require('pg-promise')(options);

// Setting up database and port 5432
function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'sources_review_dev',
      port: 5432,
      host: 'localhost',
    });
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
};

// Defining contant variable db for database
const db = setDatabase();

// Exporting db module
module.exports = db;

