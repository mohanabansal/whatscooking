const router = require('express').Router()
const {User} = require('../../db/models')
module.exports = router

// router.post('/login', async(req, res, next) => {
//   try {
//     const {email, password} = req.body
//     console.log('-----------------email', email)
//     console.log('-----------------password', password)
//     const user = await User.findOne({
//       where: {
//         email,
//         password
//       }
//     })
//     if(user){
//       console.log('-----------------user--------', user)
//       res.json(user)
//     }
//   } catch (error) {
//     next(error)
//   }
// })

router.post('/login', async (req, res, next) => {
  console.log(
    '---------------------------------in back end -------------------------'
  )
  console.log(
    '---------------------------------req.body-------------------------',
    req.body
  )
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})
