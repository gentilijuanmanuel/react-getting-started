import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

class CheckoutSummary extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  render() {
    const { ingredients } = this.state;
    const { cancelCheckoutClicked, confirmCheckoutClicked } = this.props;

    return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well.</h1>
        <div className={classes.Burger}>
          <Burger ingredients={ingredients} />
        </div>
        <Button btnType="Danger" clicked={cancelCheckoutClicked}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={confirmCheckoutClicked}>
          Confirm
        </Button>
      </div>
    );
  }
}

CheckoutSummary.propTypes = {
  cancelCheckoutClicked: PropTypes.func.isRequired,
  confirmCheckoutClicked: PropTypes.func.isRequired
};

export default CheckoutSummary;
