import React from 'react';
import PropTypes from 'prop-types';
import Classes from './BurgerIngredient.css';

// It has beeen converter into a class base component
const burgerIngredient = (props) => {
  const { type } = props;

  let ingredient = null;

  switch (type) {
    case ('bread-bottom'):
      ingredient = <div className={Classes.BreadBottom} />;
      break;
    case ('bread-top'):
      ingredient = (
        <div className={Classes.BreadTop}>
          <div className={Classes.Seeds1} />
          <div className={Classes.Seeds2} />
        </div>
      );
      break;
    case ('meat'):
      ingredient = <div className={Classes.Meat} />;
      break;
    case ('cheese'):
      ingredient = <div className={Classes.Cheese} />;
      break;
    case ('salad'):
        ingredient = <div className={Classes.Salad} />;
        break;
    case ('bacon'):
      ingredient = <div className={Classes.Bacon} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
