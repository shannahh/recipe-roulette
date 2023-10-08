import React, { useState } from "react";
import Recipes from "../../pages/search/Recipes"; // Import the Recipes component for rendering favorite recipes
import "./FavoritesPage.css";

function FavoritesPage({ favoriteRecipes, removeFromFavorites }) {
    const [randomRecipe, setRandomRecipe] = useState(null);

    const getRandomRecipe = () => {
        const randomIndex = Math.floor(Math.random() * favoriteRecipes.length);
        const selectedRecipe = favoriteRecipes[randomIndex];
        setRandomRecipe(selectedRecipe);
    };

    return (
        <div className="favorites-page">
            <h2>Your Favorite Recipes</h2>
            <button onClick={getRandomRecipe}>Get Random Recipe</button>
            {randomRecipe && (
                <div className="random-recipe">
                    <h3>Randomly Selected Recipe</h3>
                    <Recipes
                        label={randomRecipe.label}
                        image={randomRecipe.image}
                        calories={randomRecipe.calories}
                        totalNutrientsProtein={randomRecipe.totalNutrientsProtein}
                        totalNutrientsFat={randomRecipe.totalNutrientsFat}
                        totalNutrientsCarbs={randomRecipe.totalNutrientsCarbs}
                        totalTime={randomRecipe.totalTime}
                        ingredientLines={randomRecipe.ingredientLines}
                        url={randomRecipe.url}
                        isFavorite={true} // Indicates that it's already in favorites
                        removeFromFavorites={() => removeFromFavorites(randomRecipe)} // Pass the remove function
                    />
                </div>
            )}
            {/* Render the list of favorite recipes */}
            <div className="favorite-recipes">
                {favoriteRecipes.map((recipe, index) => (
                    <Recipes
                        key={index}
                        label={recipe.label}
                        image={recipe.image}
                        calories={recipe.calories}
                        totalNutrientsProtein={recipe.totalNutrientsProtein}
                        totalNutrientsFat={recipe.totalNutrientsFat}
                        totalNutrientsCarbs={recipe.totalNutrientsCarbs}
                        totalTime={recipe.totalTime}
                        ingredientLines={recipe.ingredientLines}
                        url={recipe.url}
                        isFavorite={true} // Indicates that it's already in favorites
                        removeFromFavorites={() => removeFromFavorites(recipe)} // Pass the remove function
                    />
                ))}
            </div>
        </div>
    );
}

export default FavoritesPage;


