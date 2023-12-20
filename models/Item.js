// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  data: mongoose.Schema.Types.Mixed,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;


