const HomePage = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      summary: "A classic Italian pasta dish with eggs, cheese, bacon.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      summary: "Grilled chicken in creamy tomato gravy.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl">
          <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
