import fetch from 'isomorphic-unfetch'; 

const getRecipeData = async () => {
    const res = await fetch('../recipe-db/db-recipes.json');
    const data = await res;
    return data;
};

export default getRecipeData;