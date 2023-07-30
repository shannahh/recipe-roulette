

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useState } from 'react';
import Recipes from "./Recipes";

import './Food.css'

import Header from "../../Components/header/Header";
import {Link} from "react-router-dom";

const Food = () =>{

    const YOUR_APP_ID = 'd69c0a8f'
    const YOUR_APP_KEY = 'b46ae0df2d01318c56d90f63a5959980'

    const [mySearch, setMySearch] = useState("");
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState("random")
    const MySwal = withReactContent(Swal)
    const [diet, setDiet] = useState('');
    const [allergy, setAllergy] = useState('');
    const [cuisineType, setCuisineType] = useState('')

    useEffect(() =>{
        const getRecipe = async () =>{
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
            const data = await response.json();
            if(data.count === 0){
                MySwal.fire({
                    title: <p className='p-ing'>Not found{wordSubmitted}</p>,
                    confirmButtonColor: "#00A19D"
                })
                setMySearch("")
            }
            setMyRecipes(data.hits)
        }
        getRecipe()
    }, [wordSubmitted])

    const myRecipeSearch = (e) =>{
        setMySearch(e.target.value);
    }

    const finalSearch = (e) =>{
        setWordSubmitted(mySearch)
        e.preventDefault()
    }
    // if(wordSubmitted !== myRecipes){
    //   console.log("Nothing Found")
    // }

    return (
        <div>
            <div className='container-top'>
                <Header title={"Find a recipe"}  />

            </div>
            <div className='container-form'>
                <form onSubmit={finalSearch}>
                    <input value={mySearch} onChange={myRecipeSearch} placeholder='Type one or more ingredients'/>
                    <button className={'search-button'}>Search </button>


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

                {myRecipes.map((element, index) =>(
                    <Recipes key={index}
                             label={element.recipe.label}
                             image={element.recipe.image}
                             calories={element.recipe.calories}
                             totalNutrientsProtein={element.recipe.totalNutrients.PROCNT.quantity}
                             totalNutrientsFat={element.recipe.totalNutrients.FAT.quantity}
                             totalNutrientsCarbs={element.recipe.totalNutrients.CHOCDF.quantity}
                             totalTime={element.recipe.totalTime}
                             ingredientLines={element.recipe.ingredientLines}
                             url={element.recipe.url}

                    />
                ))}
                <Link to={"/search"} > </Link>
            </div>
            <hr/>

        </div>
    );




}
export default Food