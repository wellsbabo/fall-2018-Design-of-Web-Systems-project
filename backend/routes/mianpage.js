const { Router } = require('Express')
const userModel = require('../db/models/user')
const commentModel = require('../db/models/comment')
const messageModel = require('../db/models/message')

const router = Router()

router.get('getMessage', (req, res, next) => {
  messageModel.find({}, function (err, docs) {
    if (err) {
      res.json({
        status: 1,
        message: 'get message failed',
        data: err
      })
    }
    res.json(docs)
  })
})

router.get('/getSport', (req, res, next) => {
  if (!req.body.sport) {
    res.json({
      status: 1,
      message: 'sport can not be empty',
    })
  }
  messageModel.find({ sport: req.body.sport }, function (err, docs) {
    if (err) {
      res.json({
        status: 1,
        message: 'main get sport error',
        data: err
      })
    }
    
    res.json(docs)
  })
})

module.exports = router

