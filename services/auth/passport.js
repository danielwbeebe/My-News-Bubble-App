// Thanks and credit to J Silverstein for lessons on express auth

// require passport
const passport = require('passport');
const User = require('../../models/user');

// export module
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};
