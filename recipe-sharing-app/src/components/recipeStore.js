import create from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    favorites: [],
    addRecipe: recipe => set(state => ({ recipes: [...state.recipes, recipe] })),
    deleteRecipe: id =>
        set(state => ({
            recipes: state.recipes.filter(recipe => recipe.id !== id),
        })),
    updateRecipe: updatedRecipe =>
        set(state => ({
            recipes: state.recipes.map(
                recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
            ),
        })),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({ filteredRecipes: state.recipes })),
    addFavorite: recipeId =>
        set(state => ({
            favorites: [...state.favorites, recipeId],
        })),
    removeFavorite: recipeId =>
        set(state => ({
            favorites: state.favorites.filter(id => id !== recipeId),
        })),
    recommendations: [],
    generateRecommendations: () =>
        set(state => {
            const recommended = state.recipes.filter(
                recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),
}));
export default useRecipeStore; // تأكد من تصدير `useRecipeStore` بشكل صحيح
