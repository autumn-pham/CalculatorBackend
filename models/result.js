const mongoose = require('mongoose');
const resultSchema = new mongoose.Schema({
  num1:  {type: Number, min: 0},
  num2: {type: Number, min: 0},
  result: {type: Number}
});
const Result = mongoose.model('Result', resultSchema);
module.exports = Result;
