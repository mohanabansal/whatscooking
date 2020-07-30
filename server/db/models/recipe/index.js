const Sequelize = require('sequelize')
const db = require('../../db')

const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  img: {
    type: Sequelize.TEXT
  },
  video: {
    type: Sequelize.TEXT
  },
  prepTime: {
    type: Sequelize.INTEGER
  },
  cookTime: {
    type: Sequelize.INTEGER
  },
  totalTime: {
    type: Sequelize.INTEGER
  },
  serving: {
    type: Sequelize.INTEGER
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  instructions: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  specialInstructions: {
    type: Sequelize.TEXT
  }
})

Recipe.beforeCreate(recipe => {
  recipe.totalTime = recipe.cookTime + recipe.prepTime
})

// const setTotalTime = (cookTime, prepTime) => {
//   Recipe.totalTime = cookTime + prepTime
// }

// Recipe.beforeCreate(setTotalTime(Recipe.cookTime, Recipe.prepTime))
module.exports = Recipe
