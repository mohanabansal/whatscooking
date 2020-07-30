const router = require('express').Router()
const {Recipe} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let recipes = await Recipe.findAll()
    res.json(recipes)
  } catch (error) {
    console.log(error)
  }
})
