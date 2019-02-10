import React from 'react';
import { Card, RecipeImgSm, CardTitle, Time } from '../styles/style';

const RecipeCard = props => (
    <Card>
        <RecipeImgSm src={props.src} alt='Some alt' />
        <CardTitle>{props.recipeTitle}</CardTitle>
        <Time>{props.timing}</Time>
    </Card>
)

export default RecipeCard;