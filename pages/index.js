import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Navbar from '../components/Navbar';

import { GlobalStyle } from '../styles/style';

const Index = () => (
    <div>
    <GlobalStyle />
    <Head
        title="Recipe Box | Larisa"
        description="Nextjs"
    />
    <Navbar 
        NavbarTitle='Recipe box'
    />
       <Layout />
    </div>
)

export default Index;