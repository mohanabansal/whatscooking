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

router.get('/:recipeId', async (req, res, next) => {
  try {
    console.log('-----------id---------', req.params.recipeId)
    const recipe = await Recipe.findByPk(req.params.recipeId)
    console.log('------------RECIPE-----------', recipe)
    if (recipe) {
      res.json(recipe)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.log(error)
  }
})
