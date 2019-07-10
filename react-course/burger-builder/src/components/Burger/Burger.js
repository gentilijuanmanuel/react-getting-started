import React from 'react';
import PropTypes from 'prop-types';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const { ingredients } = props;

  // Explanation:
  // With Object.keys(object) we return an array with the keys of the object as elements.
  // Then, we use the map() method to create an array for each ingredient
  // (for example if you have two tomatoes, the array of tomatoes will have two elements),
  // and then for each element return a BurgerIngredient with the corresponding key and type.
  // Note:
  // .map((_, i) => ): _ is the first argument of the callback function (current Value of the array,
  // and we are not interested in this value) and i is the second argument of the callback,
  // the index.
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
  ingredients: PropTypes.element.isRequired
};

export default burger;
