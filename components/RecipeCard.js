import React from 'react';
import Link from 'next/link'
import { Card, RecipeImgSm, CardTitle, Time, Servings, Category, RowWrapper } from '../styles/style';

const RecipeCard = props => (
    <Card>
        <Link as={`/${props.id}`}  href={`/post?title=${props.recipeTitle}`}>
            <RecipeImgSm src={props.src} alt='Some alt' />
        </Link>
        <RowWrapper>
        <Link as={`/${props.id}`}  href={`/post?title=${props.recipeTitle}`}>
            <CardTitle>{props.recipeTitle}</CardTitle>
        </Link>
            <Category  category={props.category}/>
        </RowWrapper>
        <Time><i className="far fa-clock"></i> {props.timing} min</Time>
        <Servings><i className="far fa-user"></i> {props.servings}</Servings>

    </Card>
)

export default RecipeCard;