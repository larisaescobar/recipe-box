import React from 'react';
import Head from './Head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
    <Head />
    <Navbar 
        NavbarTitle='Recipe box'
    />
    </div>
)

export default Layout;