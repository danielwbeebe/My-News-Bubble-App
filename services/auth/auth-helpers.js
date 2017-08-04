// require bcrypt
const bcrypt = require('bcryptjs');

// check password
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
};

// redirect
function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/sources/add');
  return next();
};

// require login
function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login');
  return next();
};

// exports
module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
};
