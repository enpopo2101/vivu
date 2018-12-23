const express = require('express')
const router = express.Router()
const VivuEvent = require('../models/vivu-event.model')

router.route('/').get(async function(req, res) {
  try {
    const vivuEvents = await VivuEvent.find({})

    res.render('list-events', { title: 'Events', events: vivuEvents })
  } catch (e) {
    res.status(400).send({
      message: e.message,
    })
  }
})

router.route('/:vivuEventId').get(async function(req, res) {
  try {
    const vivuEvent = req.vivuEvent
    res.render('view-event', { vivuEvent })
  } catch (e) {
    res.status(400).send({
      message: e.message,
    })
  }
})

router.param('vivuEventId', async function(req, res, next, id) {
  try {
    const vivuEvent = await VivuEvent.findById(id)
    req.vivuEvent = vivuEvent
    next()
  } catch (e) {
    res.status(400).send({
      message: e.message,
    })
  }
})

module.exports = router
