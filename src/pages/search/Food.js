import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Recipes from "./Recipes";
import './Food.css';
import Header from "../../Components/header/Header";
import { Link } from "react-router-dom";
import FavoritesPage from "../../Components/favoritepage/FavoritesPage";

const Food = () => {
    const YOUR_APP_ID = 'd69c0a8f';
    const YOUR_APP_KEY = 'ca5507f8e9500d90455e930c1aa2dc7b';

    const [mySearch, setMySearch] = useState("");
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState("");
    const MySwal = withReactContent(Swal);
    const [diet, setDiet] = useState('');
    const [allergy, setAllergy] = useState('');
    const [cuisineType, setCuisineType] = useState('');

    //Favourite; saves after refresh
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
        setFavoriteRecipes(savedFavorites);
    }, []);

    const [showFavorites, setShowFavorites] = useState(false);

    //Remove Favorite Recipe
    const removeFromFavorites = (recipeToRemove) => {
        const updatedFavorites = favoriteRecipes.filter((recipe) => recipe.label !== recipeToRemove.label);

        setFavoriteRecipes(updatedFavorites);
        localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    };

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
    };

    const addToFavorites = (recipe) => {
        const updatedFavorites = [...favoriteRecipes, recipe];
        setFavoriteRecipes(updatedFavorites);
        localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(wordSubmitted);
            const data = await response.json();

            if (data.count === 0) {
                MySwal.fire({
                    title: <p className='p-ing'>Not found for: {mySearch}</p>,
                    confirmButtonColor: "#00A19D",
                });
                setMyRecipes([]); // Clear recipes if not found
            } else {
                setMyRecipes(data.hits); // Update state with fetched recipes
            }
        };

        if (wordSubmitted) { // Ensure that wordSubmitted is not empty before making a request
            getRecipe();
        }
    }, [wordSubmitted]); // Dependency array includes wordSubmitted to trigger fetch when it changes

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value);
    };

    const finalSearch = (e) => {
        e.preventDefault(); // Prevent the form from submitting normally

        // Prepare and format the API URL
        const filterParams = [];
        if (diet) filterParams.push(`diet=${diet}`);
        if (allergy) filterParams.push(`health=${allergy}`); // 'health' for allergy filters in the API
        if (cuisineType) filterParams.push(`cuisineType=${cuisineType}`);

        const filters = filterParams.length > 0 ? `&${filterParams.join('&')}` : '';

        const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${mySearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}${filters}`;

        setWordSubmitted(apiUrl); // Submit the complete URL with filters included
    };

    return (
        <div>
            <div><button onClick={toggleFavorites}>Show Favorites</button>
            {showFavorites && (
                <FavoritesPage
                    favoriteRecipes={favoriteRecipes}
                    removeFromFavorites={removeFromFavorites}
                />
                )}
        </div>


            <div className='container-top'>
                <Header title={"Find a recipe"} />
            </div>
            <div className='container-form'>
                <form onSubmit={finalSearch}>
                    <input id={"search-bar-input"} value={mySearch} onChange={myRecipeSearch} placeholder='Type one or more ingredients' />

                    <button id={"search-button"} form={"search"} className={'search-button'}>Search</button>

                    <div className={'filter'}>
                        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
                            <option value="">Any Diet</option>
                            <option value="balanced">Balanced</option>
                            <option value="high-protein">High Protein</option>
                            <option value="low-fat">Low Fat</option>
                            <option value="low-carb">Low Carb</option>
                        </select>
                        <select value={allergy} onChange={(e) => setAllergy(e.target.value)}>
                            <option value="">No Allergy</option>
                            <option value="alcohol-free">Alcohol Free</option>
                            <option value="peanut-free">Peanut Free</option>
                            <option value="dairy-free">Dairy Free</option>
                            <option value="gluten-free">Gluten Free</option>
                            <option value="tree-nut-free">Tree Nut Free</option>
                        </select>
                        <select value={cuisineType} onChange={(e) => setCuisineType(e.target.value)}>
                            <option value="">Any Cuisine</option>
                            <option value="american">American</option>
                            <option value="asian">Asian</option>
                            <option value="indian">Indian</option>
                            <option value="gluten-free">Gluten Free</option>
                            <option value="tree-nut-free">Tree Nut Free</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className='recipes-div'>
                {myRecipes.map((element, index) => (
                    <Recipes
                        key={index}
                        label={element.recipe.label}
                        image={element.recipe.image}
                        calories={element.recipe.calories}
                        totalNutrientsProtein={element.recipe.totalNutrients.PROCNT.quantity}
                        totalNutrientsFat={element.recipe.totalNutrients.FAT.quantity}
                        totalNutrientsCarbs={element.recipe.totalNutrients.CHOCDF.quantity}
                        totalTime={element.recipe.totalTime}
                        ingredientLines={element.recipe.ingredientLines}
                        url={element.recipe.url}
                        addToFavorites={ addToFavorites} // Pass the recipe object
                        removeFromFavorites={() => removeFromFavorites(element.recipe)} // Pass the recipe object

                    />
                ))}
                <Link to={"/search"}> </Link>
            </div>
            <hr />
        </div>
    );
}

export default Food;
