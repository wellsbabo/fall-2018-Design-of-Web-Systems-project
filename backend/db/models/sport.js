const {mongoose, autoIncrement} = require('../mongo')

const sportSchema = new mongoose.Schema({
  messageId: Number,
  time: Number,
  sportType: String,
  sportTimes: Number,
  sets: Number
})

module.exports = mongoose.model('Sport',sportSchema)