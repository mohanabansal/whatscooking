const Sequelize = require('sequelize')
const db = require('../../db')

const Recipe = db.define('recipe', {
  description: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  },
  video: {
    type: Sequelize.STRING
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
  cuisine: {
    type: Sequelize.STRING
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

// const setTotalTime = (cookTime, prepTime) => {
//   Recipe.totalTime = cookTime + prepTime
// }

// Recipe.beforeCreate(setTotalTime(Recipe.cookTime, Recipe.prepTime))
module.exports = Recipe