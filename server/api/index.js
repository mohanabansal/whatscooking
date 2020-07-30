const router = require('express').Router()
module.exports = router

router.use('/users', require('../api/user'))
router.use('/auth', require('./auth'))
router.use('/recipe', require('./recipe'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
