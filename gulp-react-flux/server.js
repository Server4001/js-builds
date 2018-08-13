'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const reqPropsMiddleware = require('./lib/middleware/request_properties');

// Load config file.
const config = require('./config/config.json');

// Create application object.
const app = express();

// Add config to app container.
app.set('config.json', config);

// MongoDB.
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb);

const mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set view engine.
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './dist');

// Allow params in URIs, and parsing request body into JSON.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Additional middleware.
app.use(reqPropsMiddleware);

// Disable the "x-powered-by: Express" header.
app.set('x-powered-by', false);

// Routes.
app.use(express.static('dist'));

const indexRouter = require(path.join(__dirname, '/routes/index'))(app);
const authorsV1Router = require(path.join(__dirname, '/routes/authors/v1'))(app);

app.use('/authors/v1', authorsV1Router);
app.use('/', indexRouter);

// Boot up server.
const server = app.listen(config.port, function(err) {
    if (err) {
        console.log(`ERROR: ${err}`);
    } else {
        console.log(`Server started on port ${server.address().port}.`);
    }
});
