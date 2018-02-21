var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/regularExpressions');
mongoose.connection.once('open', function() {
  console.log("DB connection established!!!");
}).on('error', function(error) {
  console.log('CONNECTION ERROR:', error);
});


app.listen(3001, function () {
  console.log("what do you want from me! get me on 3001 ;-)");
});
