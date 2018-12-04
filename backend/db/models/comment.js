const { mongoose, autoIncrement } = require('../mongo')

const commentSchema = new mongoose.Schema({
  messageId: Number,
  content: String,
  username: String
})

module.exports = mongoose.model('Comment',commentSchema)