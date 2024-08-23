// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // الحصول على الـ id من الـ URL
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found</div>; // رسالة إذا لم يتم العثور على الوصفة
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* يمكنك إضافة المزيد من التفاصيل هنا */}
    </div>
  );
};

export default RecipeDetails;
