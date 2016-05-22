
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');

var booksDB = 'mongodb://localhost/example';

mongoose.connect(booksDB);

var port = 8080;

app.get('/', function(req, res) {
  res.send('happy to be here');
});

app.get('/books', function(req, res) {
  console.log('getting all the books');
  Book.find({})
    .exec(function(err, booksFound) {
      if(err) {
        res.send('error while retrieving books');
      }
      else {
        res.json(booksFound);
      }
    });
});

app.listen(port, function() {
  console.log('app listening on port: ' + port);
});
