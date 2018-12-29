const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VivuEventSchema = new Schema({
  name: {
    type: String,
    required: 'Bạn chưa điền tên sự kiện:',
  },
  address: {
    type: String,
    required: 'Bạn phải ghi rõ địa chỉ',
  },
  linkImg: String,
  description: {
    type: String,
    required: 'Bạn phải ghi rõ miêu tả',
  },
  startDate: {
    type: Date,
  },
  endDate: Date,
  rating: Number,
})

const VivuEvent = mongoose.model('VivuEvent', VivuEventSchema)

module.exports = mongoose.model('VivuEvent')
