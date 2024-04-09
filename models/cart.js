// models/cart.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  product: [{ type: Schema.Types.ObjectId, ref: 'product' }],
  quantities: [Number],
  user: { type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model("Cart", cartSchema);