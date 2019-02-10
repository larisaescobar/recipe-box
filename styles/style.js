import styled, { createGlobalStyle } from 'styled-components';

const colors = {
    orange: '#FF6007',
    lightOrange: '#FFE6D7',
    blue: '#32A5F8',
    lightBlue: '#BFE2FB',
    yellow: '#F8B732',
    lightYellow: '#FAE9C7',
    charcoal: '#100F0F',
    grey: '#6D6A6A',
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
    margin: 0; 
`;

export const InputWrapper = styled.div`
    width: 100%;
`;

export const SearchInput = styled.input`
    background-color: ${colors.lightOrange};
    color: ${colors.orange};
    border: none;

`;

export const Card = styled.div`
    max-width: 256px;
    max-height: 244px;
    width: 100%;
    padding: 24px 32px;
`;

export const RecipeImgSm = styled.img`
    widht: 100%;
    max-height: 170px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
`;

export const CardTitle = styled.h5`
    font-size: 24px;
    color: ${colors.charcoal};
    font-family: 'Rokkitt' , serif;
    font-weight: bold;
    margin: 8px 0 0 0;
`;

export const Time = styled.span`
    font-size: 16px;
    font-family: 'Muli', serif;
    color: ${colors.grey};
    margin-top: 8px;
`;