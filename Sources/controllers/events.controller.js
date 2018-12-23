const mongoose = require('mongoose')
const VivuEvent = mongoose.model('VivuEvent')
exports.create(function(req, res) {
  var vivuEvent = new VivuEvent(req.body)
  vivuEvent.save(res.jsonp(vivuEvent))
})
exports.read(function(req, res) {
  res.jsonp(req.vivuEvent)
})
