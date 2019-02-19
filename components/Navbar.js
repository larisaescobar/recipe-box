import React from 'react';
import { Title, NavbarWrapper, InputWrapper, SearchInput, SearchIcon } from '../styles/style';

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
            <i className="fas fa-search"></i> 
            <style jsx>{`
                    i {
                    color: #FF6007;
                    margin-left: -32px;
                    }
                `}
            </style>
        </InputWrapper>
  </NavbarWrapper>
</div>)

export default Navbar;