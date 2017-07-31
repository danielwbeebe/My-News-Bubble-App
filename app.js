// Importing Express.js from dependencies, requiring morgan, path, body-parser, method-override
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Adding requirements for verification
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// Initializing the 'To-Do' App
const app = express();

require('dotenv').config();

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// adding for verification
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Static files
app.use(express.static('public'));

// Setting views and view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setting the port, either from an env variable or manually
const PORT = process.env.PORT || 3000;

// Telling app to listen on the port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

// Index route
app.get('/', (req, res) => {
  res.render('index');
});

// import routes and tell app to use them
const sourcesRoutes = require('./routes/sources-routes');
app.use('/sources', sourcesRoutes);
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);
const getnewsRoutes = require('./routes/getnews-routes');
app.use('/getnews', getnewsRoutes);

// Error handler
app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not found!',
  });
});
