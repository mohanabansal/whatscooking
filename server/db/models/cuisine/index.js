const Sequelize = require('sequelize')
const db = require('../../db')

const Cuisine = db.define('cuisine', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Cuisine
