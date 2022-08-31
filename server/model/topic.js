const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  topic: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Topics', topicSchema);