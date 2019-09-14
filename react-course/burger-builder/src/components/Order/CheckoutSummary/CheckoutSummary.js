import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

// eslint-disable-next-line react/prefer-stateless-function
class CheckoutSummary extends Component {
  render() {
    const { cancelCheckoutClicked, confirmCheckoutClicked, ingredients } = this.props;

    let message = "Seems like you didn't prepare your burger.";
    let burger = null;
    if (ingredients != null) {
      burger = <Burger ingredients={ingredients} />;
      message = 'We hope it tastes well.';
    }

    return (
      <div className={classes.CheckoutSummary}>
        <h1>{message}</h1>
        <div className={classes.Burger}>
          {burger}
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
  ingredients: PropTypes.object,
  cancelCheckoutClicked: PropTypes.func.isRequired,
  confirmCheckoutClicked: PropTypes.func.isRequired
};

CheckoutSummary.defaultProps = {
  ingredients: null
};

export default withRouter(CheckoutSummary);
