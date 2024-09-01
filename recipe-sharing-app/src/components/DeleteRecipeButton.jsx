import React from 'react';
import PropTypes from 'prop-types';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)}>
      Delete Recipe
    </button>
  );
};

DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired
};

export default DeleteRecipeButton;
