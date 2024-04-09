const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
  quantities: [Number],
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  orderDate: { type: Date, default: Date.now },
  totalPrice: { type: Number, default: 0 } 
});

module.exports = mongoose.model("order", orderSchema);
