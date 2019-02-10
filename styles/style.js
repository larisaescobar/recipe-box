import styled, { createGlobalStyle } from 'styled-components';

const colors = {
    orange: '#FF6007',
    lightOrange: '#FFE6D7',
    blue: '#32A5F8',
    lightBlue: '#BFE2FB',
    yellow: '#F8B732',
    lightYellow: '#FAE9C7',
    charcoal: '#100F0F',
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Muli', sans-serif;

    }
`;

export const NavbarWrapper = styled.div`
    display: flex;
    padding: 32px 80px;
    justify-content: space-between;
    border-bottom: 1px solid #C4C4C4;
`;

export const Title = styled.h1`
    font-size: 60px;
    font-family: 'Poppins', serif;
    font-weight: 700;  
`;

export const InputWrapper = styled.div`
    width: 100%;
`;

export const SearchInput = styled.input`
    background-color: ${colors.lightOrange};
    color: ${colors.orange};
    border: none;

`;