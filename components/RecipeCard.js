import React from 'react';
import { Card, RecipeImgSm, CardTitle, Time, Servings, Category, RowWrapper } from '../styles/style';

const RecipeCard = props => (
    <Card>
        <RecipeImgSm src={props.src} alt='Some alt' />
        <RowWrapper>
            <CardTitle>{props.recipeTitle}</CardTitle>
            <Category  category={props.category}/>
        </RowWrapper>
        <Time><i class="far fa-clock"></i> {props.timing} min</Time>
        <Servings><i class="far fa-user"></i> {props.servings}</Servings>

    </Card>
)

export default RecipeCard;