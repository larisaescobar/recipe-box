import styled, { createGlobalStyle } from 'styled-components';

const colors = {
    orange: '#FF6007',
    lightOrange: '#FFE6D7',
    blue: '#32A5F8',
    lightBlue: '#BFE2FB',
    yellow: '#F8B732',
    lightYellow: '#fae9c7c4',
    green: '#21ad21',
    lightGreen: '#90ee907d',
    charcoal: '#100F0F',
    grey: '#6D6A6A',
}

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Muli', sans-serif;
        margin: 0;
    }
`;

export const NavbarWrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    padding: 24px 40px;
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
    display: inline-flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    background-color: ${colors.lightOrange};
    color: ${colors.orange};
    border: none;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    padding: 16px;
    font-family: 'Muli', sans-serif;

    ::placeholder {
        color: ${colors.orange};
    }
`;

export const SearchIcon = styled.i`
    color: ${colors.orange};
    margin-left: -32px;
`;


export const Card = styled.div`
    max-width: 300px;
    max-height: 244px;
    width: 100%;
    padding: 10px 24px;
`;

export const RecipeImgSm = styled.img`
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height: 200px;
    border-radius: 4px;
    :hover {
        box-shadow: 2px 3px 10px rgba(0, 0.1, 0.1, 0.50); 
    }
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
    color: ${colors.grey};
    margin-top: 8px;
    margin-right: 16px;
`;

export const Servings = styled.span`
    font-size: 16px;
    color: ${colors.grey};
    margin-top: 8px;
`;

export const Category = styled.div`
    --breakfast-bg: ${colors.yellow}; 
    --lunch-bg: ${colors.blue};
    --dinner-bg: ${colors.orange};
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:  ${props => `var(--${props.category}-bg)`};
`;

export const TagBreakfast = styled(Category)`
    background-color: ${colors.yellow};
`;

export const TagLunch = styled(Category)`
    background-color: ${colors.blue};
`;

export const TagDinner = styled(Category)`
    background-color: ${colors.orange};
`;

export const RowWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;

export const FilterWrapper = styled.div`
    display: inline;
    grid-area: 1 / 1 / 1 / 4;
    padding: 0 24px;
`;

export const Button = styled.button`
    font-size: 16px;
    text-align: center;
    border-radius: 4px;
    border: none;
    padding: 8px 16px;
    margin-right: 10px;
    font-family: 'Muli', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: ${colors.green};
    background-color: ${colors.lightGreen};
    :hover {
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.21); 
    }
`;

export const DinnerButton = styled(Button)`
    color: ${colors.orange};
    background-color: ${colors.lightOrange};
`;

export const LunchButton = styled(Button)`
    color: ${colors.blue};
    background-color: ${colors.lightBlue};
`;

export const BreakfastButton = styled(Button)`
    color: ${colors.yellow};
    background-color: ${colors.lightYellow};
`;

export const RecipeListWRapper = styled.div`
    display: grid;
    max-width: 1000px;
    margin: 32px auto 0;
    justify-content: center;
    grid-template-columns:  repeat(3, 1fr);
    row-gap: 32px;
    :first-child {
        grid-column: 1 / -1;
      }
`;