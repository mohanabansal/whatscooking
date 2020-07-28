const router = require('express').Router()
const {User} = require('../../db/models')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.session.userId = user.id
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.get('/me', async (req, res, next) => {
  try {
    console.log(
      '--------------------req.session.userId-------------',
      req.session.userId
    )
    // res.json(req.user)
    if (req.session.userId) {
      console.log('------------inside if---------')
      const user = await User.findByPk(req.session.userId)
      console.log('-------------FOUND USER------------', user)
      if (user) {
        res.json(user)
      } else {
        res.sendStatus(404)
      }
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    req.session.destroy()
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
})
