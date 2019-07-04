import React from 'react';
import PropTypes from 'prop-types';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const { ingredients } = props;

  // TODO: deeply understand this!
  const transformedIngredients = Object.keys(ingredients)
      .map(ingredientKey => [...Array(ingredients[ingredientKey])].map((_, i) =>
        <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />));

  return (
    <div className={Classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  // TODO: see this
  ingredients: PropTypes.element.isRequired
};

export default burger;
