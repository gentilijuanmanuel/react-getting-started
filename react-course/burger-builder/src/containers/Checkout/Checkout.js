// Note about containers: there are statefull components that manage their own state,
// and pass them to other stateless components.
import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  cancelCheckoutHandler = () => {
    console.log('Cancel checkout handler!');
  }

  confirmCheckoutHandler = () => {
    console.log('Confirm checkout handler!');
  }

  render() {
    return (
      <CheckoutSummary
        cancelCheckoutClicked={this.cancelCheckoutHandler}
        confirmCheckoutClicked={this.confirmCheckoutHandler}
      />
    );
  }
}

export default Checkout;
