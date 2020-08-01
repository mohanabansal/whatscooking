import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {
  getRecipeFromServer,
  getSingleRecipeFromServer
} from '../../reducer/recipe'
import './index.css'

class Recipe extends Component {
  componentDidMount() {
    this.props.getRecipes()
  }

  render() {
    const {recipes} = this.props
    console.log(recipes)
    return (
      <div className="recipes-container">
        {console.log('showing recipe', recipes)}
        {recipes &&
          recipes.map(recipe => {
            return (
              <div key={recipe.id} className="recipe">
                <NavLink
                  to={`/recipe/${recipe.id}`}
                  onClick={() => {
                    this.props.getSingleRecipe(recipe.id)
                  }}
                >
                  <img src={recipe.img} />
                </NavLink>
                <NavLink
                  to={`/recipe/${recipe.id}`}
                  onClick={() => {
                    this.props.getSingleRecipe(recipe.id)
                  }}
                >
                  <h2 className="title">{recipe.name}</h2>
                </NavLink>
              </div>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.allRecipes.recipes
})

const mapDispatchToProps = disptach => ({
  getRecipes: () => disptach(getRecipeFromServer()),
  getSingleRecipe: id => disptach(getSingleRecipeFromServer(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
