import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

// eslint-disable-next-line react/prefer-stateless-function
class CheckoutSummary extends Component {
  render() {
    const { cancelCheckoutClicked, confirmCheckoutClicked, ...routerProps } = this.props;

    let burger = <p>Seems like you didn't prepare your burger.</p>;
    if (routerProps.location.state.ingredients != null) {
      burger = <Burger ingredients={routerProps.location.state.ingredients} />;
    }

    return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well.</h1>
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
  routerProps: PropTypes.element,
  cancelCheckoutClicked: PropTypes.func.isRequired,
  confirmCheckoutClicked: PropTypes.func.isRequired
};

CheckoutSummary.defaultProps = {
  routerProps: null
};

export default withRouter(CheckoutSummary);
