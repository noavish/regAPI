var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new mongoose.Schema({
  _id: String,
  title: String
});

var validSchema = new mongoose.Schema({
  _id: String,
  title: String
});

var invalidSchema = new mongoose.Schema({
  _id: String,
  title: String
});

var expressionSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  tags: [tagSchema],
  rating: Number,
  validExamples: [validSchema],
  invalidExamples: [invalidSchema]
});

var Expression = mongoose.model('expression', expressionSchema);

module.exports = Expression;
