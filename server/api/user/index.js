const router = require('express').Router()
const {User} = require('../../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  console.log('-------------->', req.body)
  try {
    const {firstName, lastName, email, password} = req.body
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password
    })
    if (newUser) res.send('new user created')
  } catch (error) {
    next(error)
  }
})
