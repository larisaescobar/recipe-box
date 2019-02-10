import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';

const Layout = (props) => (
    <div>
    <Head />
    <Navbar 
        NavbarTitle='Recipe box'
    />
    <RecipeCard
        src='https://feedmephoebe.com/wp-content/uploads/2015/01/Seared-Salmon-and-Quinoa-Bowls-with-Massaged-Kale-Chickpeas-and-Lemon-Tahini-Sauce_.jpg'
        recipeTitle='Delish salmon'
        timing='25 mins'
    />
    </div>
)

export default Layout;