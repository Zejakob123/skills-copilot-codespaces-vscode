// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create web server
const app = express();

// Connect to database
mongoose.connect('mongodb://localhost/comments');
mongoose.Promise = global.Promise;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('Now listening for requests');
});