import React from 'react';
import { Title, NavbarWrapper, InputWrapper, SearchInput } from '../styles/style';

const Navbar = props => (<div>
    <NavbarWrapper>
        <Title>
            {props.NavbarTitle}
        </Title>
        <InputWrapper>
            <SearchInput 
                type='search'
                placeholder='Search recipes' 
            />  
        </InputWrapper>
  </NavbarWrapper>
</div>)

export default Navbar;