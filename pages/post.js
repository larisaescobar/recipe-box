import React from 'react';
import {withRouter} from 'next/router'
import Head from '../components/Head';
import Navbar from '../components/Navbar';

import { GlobalStyle, RecipePageDiv, RecipeTitle } from '../styles/style';

const Page = withRouter((props) =>  (
    <div>
    <GlobalStyle />
        <Head
            title="Recipe Box | Larisa"
            description="Nextjs"
        />
        <Navbar 
            NavbarTitle='Recipe box'
        />
        <RecipePageDiv>
            <RecipeTitle>{props.router.query.title}</RecipeTitle>
        </RecipePageDiv>
        
    </div>
    
))

export default Page;