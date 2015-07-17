var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name: String,
  price: {type: Number, default: 0}
});

mongoose.model('Item', ItemSchema);