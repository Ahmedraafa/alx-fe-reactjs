// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import Recipe from './Recipe';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const { recipes, filteredRecipes, filterRecipes } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes
  }));

  useEffect(() => {
    filterRecipes(); // تصفية الوصفات عند تحميل المكون
  }, [filterRecipes]);

  return (
    <div>
      <SearchBar />
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
