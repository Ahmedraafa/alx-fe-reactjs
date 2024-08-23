import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {/* يمكنك إضافة المزيد من التفاصيل هنا مثل المكونات والطريقة */}
    </div>
  );
};

// التحقق من نوع props
Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Recipe;
