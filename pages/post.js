import React from 'react';
import {withRouter} from 'next/router'
import Head from '../components/Head';
import Navbar from '../components/Navbar';

import recipes from '../recipe-db/db-recipes.json';
import { GlobalStyle, RecipePageDiv, RecipeTitle } from '../styles/style';

const Content = withRouter((props) => (
    <div>
        <RecipePageDiv>
            <RecipeTitle>{props.router.query.title}</RecipeTitle>
        </RecipePageDiv>
    </div>
))

const Page = (props) =>  (
    <div>
    <GlobalStyle />
        <Head
            title="Recipe Box | Larisa"
            description="Nextjs"
        />
        <Navbar 
            NavbarTitle='Recipe box'
        />
        <Content />
    </div>
    
)

export default Page;