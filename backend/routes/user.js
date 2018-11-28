const { Router } = require('Express')
const userModel = require('../db/models/user')

const router = Router()

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
      }else{
        res.json({
          status: 0,
          message: 'login success'
        })
      }
    }
  })
})

router.post('/register', (req,res,next)=>{
  if(!req.body.username){
    res.json({
      status: 1,
      message: 'username can not be empty'
    })
  }
  if(!req.body.password){
    res.json({
      status: 1,
      message: 'password can not be empty'
    })
  }
  userModel.find({username: req.body.username},function(err,docs){
    if(docs.length!=0){
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
  userRegister.save((err)=>{
    if(err){
      res.json({
        status: 1,
        message: 'user register error',
        data: err 
      })
    }else{
      res.json({
        status: 0,
        message: 'user register success'
      })
    }
  })
})

module.exports = router