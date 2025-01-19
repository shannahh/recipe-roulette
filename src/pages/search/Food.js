import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Recipes from "./Recipes";
import './Food.css';
import Header from "../../Components/header/Header";
import { Link } from "react-router-dom";
import FavoritesPage from "../../Components/favoritepage/FavoritesPage";
import { db, auth } from '../../firebase/firebase';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import {
    fetchFilteredRecipes,
    fetchRecipesByAllergy,
    fetchRecipesByDiet,
    fetchRecipesByIngredient,
    fetchRecipesByCuisineType
} from "../../Service/RecipeService";

const Food = () => {
    const [mySearch, setMySearch] = useState("");
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted] = useState("");
    const MySwal = withReactContent(Swal);
    const [diet, setDiet] = useState('');
    const [allergy, setAllergy] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [loading, setLoading] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);

    //Favourite; saves after refresh
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const docRef = doc(db, 'favorites', user.uid);
                getDoc(docRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        setFavoriteRecipes(docSnap.data().recipes);
                    } else {
                        setFavoriteRecipes([]); // Initialize if no favorites exist
                    }
                });
            }
        });

        return () => unsubscribe();
    }, []);

    const addToFavorites = async (recipe) => {
        const user = auth.currentUser;
        if (user) {
            const updatedFavorites = [...favoriteRecipes, recipe];
            setFavoriteRecipes(updatedFavorites);
            await setDoc(doc(db, 'favorites', user.uid), { recipes: updatedFavorites });
        }
    };

    const removeFromFavorites = async (recipeToRemove) => {
        const user = auth.currentUser;
        if (user) {
            const updatedFavorites = favoriteRecipes.filter(recipe => recipe.label !== recipeToRemove.label);
            setFavoriteRecipes(updatedFavorites);
            await updateDoc(doc(db, 'favorites', user.uid), { recipes: updatedFavorites });
        }
    };

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
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
    }, );

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value);
    };

    const finalSearch = async (e) => {
        e.preventDefault(); // Prevent the form from submitting normally
        try {
            setLoading(true);
            let data = [];
            if(mySearch) {
                // Check if a diet has been selected
                if (diet) {
                    // If a diet is selected, fetch recipes by diet even if mySearch is empty
                    data = await fetchRecipesByDiet(mySearch, diet);
                } else if (allergy) {
                    data = await fetchRecipesByAllergy(mySearch, allergy)
                }  else if (cuisineType) {
                    data = await fetchRecipesByCuisineType(mySearch, cuisineType); // Search by cuisine type
                }
                else {
                    data = await fetchRecipesByIngredient(mySearch);
                }
        } else {
                data = await fetchFilteredRecipes('', diet, allergy, cuisineType);
            }
            if (!data || data.length === 0) {
                MySwal.fire({
                    title: <p className='p-ing'>Not found for: {mySearch}</p>,
                    confirmButtonColor: "#00A19D",
                });
                setMyRecipes([]); // Clear myRecipes if no recipe found
            } else {
                setMyRecipes(data); // Update state with fetched recipes
            }
        } catch (error) {
            MySwal.fire({
                title: <p className='p-ing'>Error fetching data</p>,
                confirmButtonColor: "#00A19D",
                text: error.message || 'An unexpected error occurred.',
            });
        } finally {
            setLoading(false); // Set loading to false
        }
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