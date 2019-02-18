import React, { Component } from 'react';
import Head from './Head';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';

import recipes from '../recipe-db/db-recipes.json';
import { FilterWrapper, DinnerButton, LunchButton, BreakfastButton, RecipeListWRapper } from '../styles/style';
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: recipes.recipes,
        };
    } 

    render() {
        const { recipes } =  this.state;
        console.log(this.state.recipes);
        return (
            
            <div>
                <Head
                    title="Recipe Box | Larisa"
                    description="Nextjs"
                />
                <Navbar 
                    NavbarTitle='Recipe box'
                />
                <FilterWrapper>
                    <BreakfastButton>Breakfast</BreakfastButton>
                    <LunchButton>Lunch</LunchButton>
                    <DinnerButton>Dinner</DinnerButton>
                </FilterWrapper>
                <RecipeListWRapper>
                {recipes.map(recipe => (
                    <RecipeCard 
                         src={recipe.imageSource}
                         recipeTitle={recipe.name}
                         timing={recipe.preptime}
                         servings={recipe.servings}
                         category={recipe.category}
                         
                     />
                ))}
                </RecipeListWRapper>
            
            </div>
        )
    }
};

export default Layout;