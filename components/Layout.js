import React, { Component } from 'react';
import Head from './Head';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';

import recipes from '../recipe-db/db-recipes.json';
import { FilterWrapper, Button, DinnerButton, LunchButton, BreakfastButton, RecipeListWRapper } from '../styles/style';
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: recipes.recipes,
            selectedCategory: 'all',
        };
        this.handleClick = this.handleClick.bind(this);
    } 

    handleClick = e => {
        this.setState({ selectedCategory: e.target.value })
    }

    render() {
        const { recipes } =  this.state;
        const { selectedCategory } = this.state;
        const filteredRecipes = recipes.filter(recipe => {
            if(selectedCategory === recipe.category) {
                return recipe;
            } else if (selectedCategory === 'all') {
                return recipe;
            }
        })
        return (
            
            <div>
                <Head
                    title="Recipe Box | Larisa"
                    description="Nextjs"
                />
                <Navbar 
                    NavbarTitle='Recipe box'
                />
               
                <RecipeListWRapper>
                    <FilterWrapper>
                        <Button
                            onClick={this.handleClick}
                            value='all'
                        >
                        All recipes
                        </Button>
                        <BreakfastButton 
                            onClick={this.handleClick}
                            value='breakfast'
                            >Breakfast
                        </BreakfastButton>
                        <LunchButton
                            onClick={this.handleClick} 
                            value='lunch'
                            >Lunch
                        </LunchButton>
                        <DinnerButton
                            onClick={this.handleClick}
                            value='dinner'
                            >Dinner
                        </DinnerButton>
                    </FilterWrapper>
                {filteredRecipes.map(recipe => (
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