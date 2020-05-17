import React from 'react';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            <BurgerIngredients type="cheese"/>
            <BurgerIngredients type="meat"/>
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}

export default burger;