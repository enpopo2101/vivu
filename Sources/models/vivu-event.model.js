const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VivuEventSchema = new Schema({
  name: String,
})

const VivuEvent = mongoose.model('VivuEvent', VivuEventSchema)

module.exports = mongoose.model('VivuEvent')
