const express = require('express');
// const morgan = require('./morgan');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const expressSession = require('express-session');
// const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('../api/routes/v1');
const { logs, jwt, env } = require('./config');
const strategies = require('./passport');
const error = require('../api/middlewares/error');
const {authLimiter} = require('../api/middlewares/rateLimiter');
const mongoose = require("mongoose");


const fileUpload = require("express-fileupload");

/**
* Express instance
* @public
*/
const app = express();

app.use(express.static(__dirname + "/uploaded"));

// default options
app.use(fileUpload(
  {
    createParentPath: true,
    uriDecodeFileNames: true,
    preserveExtension: true,
    abortOnLimit: true,
    responseOnLimit: "File too big, please upload less than 5MB PDF file",
    

  }

));

// 

app.use(bodyParser.json({limit: '35mb'}));
app.use(express.urlencoded({extended: true}));
// request logging. dev: console | production: file
app.use(morgan(logs));

// if (env !== 'test') {
//     app.use(morgan.successHandler);
//     app.use(morgan.errorHandler);
//   }

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded


// // sanitize request data
// app.use(xss());
// app.use(mongoSanitize());

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
// enable CORS - Cross Origin Resource Sharing
app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Disposition']
}));


// enable authentication
app.use(expressSession({ 
  secret: jwt.jwtSecret,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
// app.use(passport.session());
passport.use('jwt', strategies.jwtStrategy);
// passport.use('facebook', strategies.facebook);
// passport.use('google', strategies.google);

// limit repeated failed requests to auth endpoints
// if (config.env === 'production') {
//     app.use('/v1/auth', authLimiter);
//   }
  


// mount api v1 routes
app.use('/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
