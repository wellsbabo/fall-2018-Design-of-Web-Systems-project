const { Router } = require('Express')
const formidable = require('formidable')
const path = require('path')
const userModel = require('../db/models/user')
const commentModel = require('../db/models/comment')
const messageModel = require('../db/models/message')

const router = Router()

//login
router.post('/login', (req, res, next) => {
  if (!req.body.username) {
    res.json({
      status: 1,
      message: 'username can not be empty'
    })
  }
  if (!req.body.password) {
    res.json({
      status: 1,
      message: 'password can not be empty'
    })
  }

  userModel.findOne({ username: req.body.username }, function (err, docs) {
    if (err) {
      res.json({
        status: 1,
        message: 'login error',
        data: err
      })
    } else {
      if (docs.password != req.body.password) {
        res.json({
          status: 1,
          message: 'login error'
        })
      } else {
        res.json({
          status: 0,
          message: 'login success'
        })
      }
    }
  })
})

//register
router.post('/register', (req, res, next) => {
  if (!req.body.username) {
    res.json({
      status: 1,
      message: 'username can not be empty'
    })
  }
  if (!req.body.password) {
    res.json({
      status: 1,
      message: 'password can not be empty'
    })
  }
  userModel.find({ username: req.body.username }, function (err, docs) {
    if (docs.length != 0) {
      res.json({
        status: 1,
        message: 'username exist'
      })
    }
  })
  var userRegister = new userModel({
    username: req.body.username,
    password: req.body.password,
    memo: req.body.memo
  })
  userRegister.save((err) => {
    if (err) {
      res.json({
        status: 1,
        message: 'user register error',
        data: err
      })
    } else {
      res.json({
        status: 0,
        message: 'user register success'
      })
    }
  })
})

// post message
router.post('/postMessage', (req, res, next) => {
  if (!req.body.userId) {
    res.json({
      status: 1,
      message: 'userId empty'
    })
  }
  if (!req.body.content) {
    res.json({
      status: 1,
      message: 'content empty'
    })
  }
  if (!req.body.picture) {
    res.json({
      status: 1,
      message: 'picture empty'
    })
  }
  if (!req.body.msgDate) {
    res.json({
      status: 1,
      message: 'message date empty'
    })
  }

  var form = formidable.IncomingForm()
  var targetFile = path.join(__dirname, './images')
  form.encoding = 'utf-8'
  form.uploadDir = targetFile
  form.keepExtensions = true
  form.maxFieldsSize = 2 * 1024 * 1024

  form.parse(req, function (err, fields, files) {
    
    var postMessage = new messageModel({
      userId: req.body.userId,
      content: req.body.content,
      picture: files.image.path,
      msgDate: req.body.msgDate,
      sprot: req.body.sprot
    })
  
    postMessage.save((err) => {
      if (err) {
        res.json({
          status: 1,
          message: 'message post  error',
          data: err
        })
      }
      res.json({
        status: 0,
        message: 'message post success'
      })
    })
  })

})

//likes
router.post('/likes', (req, res, next) => {
  if (!req.body.messageId) {
    res.json({
      status: 1,
      message: 'message id does not exist'
    })
  }
  messageModel.findOne({ messageId: req.body.messageId }, function (err, docs) {
    messageModel.update(
      { messageId: req.body.messageId },
      { likes: docs.likes + 1 },
      function (err) {
        if (err) {
          res.json({
            status: 1,
            message: 'faild to support',
            data: err
          })
        }
        res.json({
          status: 0,
          message: 'support success'
        })
      }
    )
  })
})

//post comment
router.post('/postComment', (req, res, next) => {
  if (!req.body.username) {
    req.body.username = 'anonymous user'
  }
  if (!req.body.messageId) {
    res.json({
      status: 1,
      message: 'messageId can not be empty'
    })
  }
  if (!req.body.content) {
    RTCSrtpSdesTransport.json({
      status: 1,
      message: 'content can not be empty'
    })
  }
  var postComment = new commentModel({
    messageId: req.body.messageId,
    content: req.body.content
  })
  postComment.save((err) => {
    if (err) {
      res.json({
        status: 1,
        message: 'post comment error',
        data: err
      })
    }

    res.json({
      status: 0,
      message: 'comment success'
    })
  })
})

router.get('/getMessage', (req, res, next) => {
  if (!req.body.userId) {
    res.json({
      status: 1,
      message: 'userId can not be empty',
    })
  }
  messageModel.find({ userId: req.body.userId }, function (err, docs) {
    if (err) {
      res.json({
        status: 1,
        message: 'get message error',
        data: err
      })
    }
    res.json(docs)
  })
})

router.get('/getSport', (req, res, next) => {
  if (!req.body.sprot) {
    res.json({
      status: 1,
      message: 'sport can not be empty',
    })
  }
  messageModel.find({ sport: req.body.sport }, function (err, docs) {
    if (err) {
      res.json({
        status: 1,
        message: 'get sport error',
        data: err
      })
    }
    res.json(docs)
  })
})

router.get('/getInfo', (req, res, next) => {
  if (req.body.username) {
    res.json({
      status: 1,
      message: 'username can not be empty'
    })
  }
  userModel.findOne({ userId: req.body.username }, function (err, docs) {
    if (err) {
      res.json({
        status: 1,
        message: 'user get info error',
        data: err
      })
    }
    res.json(docs)
  })
})

module.exports = router