// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import Recipe from './Recipe';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';  // Import Link for navigation

const RecipeList = () => {
  const { filteredRecipes, filterRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes
  }));

  useEffect(() => {
    filterRecipes(); // Filter recipes when the component mounts or search term changes
  }, [filterRecipes]);

  return (
    <div>
      <SearchBar />
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-item">
              <Recipe recipe={recipe} />
              <Link to={`/recipe/${recipe.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
