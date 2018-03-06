const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
  title: String,
  description: String,
  release: Number,
  artist: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Music', MusicSchema)
