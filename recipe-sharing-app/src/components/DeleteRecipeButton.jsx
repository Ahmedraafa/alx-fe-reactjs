import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // توجيه المستخدم إلى الصفحة الرئيسية بعد الحذف
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

// تعريف نوع البيانات المطلوبة لـ props
DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired
};

export default DeleteRecipeButton;
