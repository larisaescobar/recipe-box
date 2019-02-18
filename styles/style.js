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

export const GlobalStyle = createGlobalStyle`
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
    width: 100%;
    max-width: 250px;
    height: 100%;
    max-height: 170px;
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
    width: 15px;
    height: 15px;
    border-radius: 50%;
   background-color: ${props => {props.category}};
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
    display: inline-flex;

`;

export const Button = styled.button`
    font-size: 18px;
    text-align: center;
    border-radius: 4px;
    border: none;
    padding: 8px 16px;
    margin: 20px 10px;
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
    max-width: 900px;
    margin: 0 auto; 
    grid-template-columns:  repeat(3, 300px [col-start]);
`;