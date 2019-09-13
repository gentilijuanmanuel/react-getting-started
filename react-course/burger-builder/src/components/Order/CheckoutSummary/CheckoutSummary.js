import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

// eslint-disable-next-line react/prefer-stateless-function
class CheckoutSummary extends Component {
  state = {
    ingredients: null
  }

  componentDidMount() {
    const { location } = this.props;

    if (location.state) {
      this.setState({
        ingredients: location.state.ingredients
      });
    }
  }

  render() {
    const { cancelCheckoutClicked, confirmCheckoutClicked } = this.props;
    const { ingredients } = this.state;

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
  location: PropTypes.object.isRequired,
  cancelCheckoutClicked: PropTypes.func.isRequired,
  confirmCheckoutClicked: PropTypes.func.isRequired
};

export default withRouter(CheckoutSummary);
