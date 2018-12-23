const express = require('express')
const router = express.Router()
const VivuEvent = require('../models/vivu-event.model')
router.get('/', function(req, res) {
  res.render('create-event')
})
router.post('/', function(req, res) {
  res.send(req.body)
  console.log(req.body)
})
module.exports = router
