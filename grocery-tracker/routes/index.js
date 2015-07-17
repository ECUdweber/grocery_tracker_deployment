var express = require('express');
var app = express.Router();

// a middleware sub-stack shows request info for any type of HTTP request to /groceryitem/:id
app.use('/lists/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.get('/lists', function(req, res, next) {
  res.send('Groceries Lists route...');
});

app.get('/groceries', function(req, res, next) {
  res.send('Groceries route...');
});

// a middleware sub-stack shows request info for any type of HTTP request to /groceryitem/:id
app.use('/groceryitem/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = app;
