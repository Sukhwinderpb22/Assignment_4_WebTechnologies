// models/comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'product' },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  rating: Number,
  image: String,
  text: String
});

module.exports = mongoose.model("comment", commentSchema);