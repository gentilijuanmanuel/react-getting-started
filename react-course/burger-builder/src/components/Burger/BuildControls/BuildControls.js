/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
  const {
    addIngredient, removeIngredient, disabledInfo, currentPrice, canPurchase, ordered
  } = props;

  return (
    <div className={classes.BuildControls}>
      <p>Current price: <strong>{currentPrice.toFixed(2)}</strong></p>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          addIngredient={() => addIngredient(control.type)}
          removeIngredient={() => removeIngredient(control.type)}
          disabled={disabledInfo[control.type]}
        />
      ))}
      <button
        type="button"
        disabled={!canPurchase}
        className={classes.OrderButton}
        onClick={ordered}
      >
          Order now
      </button>
    </div>
  );
};

buildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabledInfo: PropTypes.object.isRequired,
  currentPrice: PropTypes.number.isRequired,
  canPurchase: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired
};

export default buildControls;
