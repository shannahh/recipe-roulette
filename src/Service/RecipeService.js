const YOUR_APP_ID = 'd69c0a8f';
const YOUR_APP_KEY = '1356aef348bcede81fae794742f196e1';

//Get recipes by diet
export const fetchRecipesByDiet = async (ingredients, diet) => {
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&diet=${diet}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.hits || [];
};


export const fetchFilteredRecipes = async (ingredients, diet, allergy, cuisineType) => {
    const filterParams = [];
    if (diet) filterParams.push(`diet=${diet}`);
    if (allergy) filterParams.push(`health=${allergy}`);
    if (cuisineType) filterParams.push(`cuisineType=${cuisineType}`);

    const filters = filterParams.length > 0 ? `&${filterParams.join('&')}` : '';
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}${filters}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data.hits;
};