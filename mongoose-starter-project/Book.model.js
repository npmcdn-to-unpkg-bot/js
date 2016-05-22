'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  category: String
});

// var BookSchema = new Schema({
//   title: String,
//   published: {
//     type: Date,
//     default: Date.now
//   },
//   keywords: Array,
//   published: Boolean,
//   author: {
//     type: Schema.ObjectId,
//     ref: 'User'
//   },
//
//   // an embedded sub-document:
//   details: {
//     modelNumber: Number,
//     hardcover: Boolean,
//     reviews: Number,
//     rank: Number
//   }
// });

module.exports = mongoose.model('Book', BookSchema);
