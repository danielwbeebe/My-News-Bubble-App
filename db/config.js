// Creating constant variable options
const options = {
  query: (e) => {
    console.log(e.query);
  },
};

// requiring pg-promise
const pgp = require('pg-promise')(options);

// Defining contant variable db for database
const db = setDatabase();

// Setting up database and port 5432
function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    db = pgp({
      database: 'news_bubble_dev',
      port: 5432,
      host: 'localhost',
    });
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
};

// Exporting db module
module.exports = db;

