import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getRecipeFromServer} from '../../reducer/recipe'
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
                <NavLink to={`/recipe/${recipe.id}`}>
                  <img src={recipe.img} />
                </NavLink>
                <h2 className="title">{recipe.name}</h2>
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
  getRecipes: () => disptach(getRecipeFromServer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
