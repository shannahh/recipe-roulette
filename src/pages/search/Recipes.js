import React, { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function Recipes ({
                     label,
                     image,
                     calories,
                     totalNutrientsProtein,
                     totalTime,
                     ingredientLines,
                     totalNutrientsFat,
                     totalNutrientsCarbs,
                     url,
                    addToFavorites,
                    removeFromFavorites,
                 })  {
    const MySwal = withReactContent(Swal);
    const [isFavorite, setIsFavorite] = useState(false);

    const sweetAlert = () => {
        MySwal.fire({
            title: <p className='p-ing'>Ingredients</p>,
            html: (
                <ul className='ingredients-ul'>
                    {ingredientLines.map((ingredient, index) => (
                        <li key={index}>✔ {ingredient}</li>
                    ))}
                </ul>
            ),
            confirmButtonColor: "#00A19D",
        });
    };

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites({
                label,
                image,
                calories,
                totalNutrientsProtein,
                totalTime,
                ingredientLines,
                totalNutrientsFat,
                totalNutrientsCarbs,
                url,
            });
        } else {
            addToFavorites({
                label,
                image,
                calories,
                totalNutrientsProtein,
                totalTime,
                ingredientLines,
                totalNutrientsFat,
                totalNutrientsCarbs,
                url,
            });
        }

        setIsFavorite(!isFavorite);

    };

    return (
        <>
            <div className="recipe-div">
                <h2>{label}</h2>
                <img className='rec-img' src={image} alt="recipe" />
                <p><b>{calories.toFixed()} kcal</b></p>
                <p>Total time: {totalTime} mins</p>
                <p className='p-text'> Protein <b>{totalNutrientsProtein.toFixed()} g</b></p>
                <p className='p-text'> FAT <b> {totalNutrientsFat.toFixed()} g</b></p>
                <p className='p-text'> Carbs <b> {totalNutrientsCarbs.toFixed()} g</b></p>

                <button onClick={sweetAlert} className="view-btn">View ingredients</button>




                {isFavorite ? (
                    <button onClick={toggleFavorite} className="favorite-btn-remove">
                        Remove from Favorites
                    </button>
                ) : (
                    <button onClick={toggleFavorite} className="favorite-btn">
                        Add to Favorites
                    </button>
                )}


                <p className='red'>View full recipe <a className='link' href={url}>here</a></p>
            </div>
        </>
    );
}

export default Recipes;

