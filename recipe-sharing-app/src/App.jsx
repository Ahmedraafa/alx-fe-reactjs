import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';  // Import FavoritesList
import RecommendationsList from './components/RecommendationsList';  // Import RecommendationsList

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />  {/* Route for favorites */}
          <Route path="/recommendations" element={<RecommendationsList />} />  {/* Route for recommendations */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
