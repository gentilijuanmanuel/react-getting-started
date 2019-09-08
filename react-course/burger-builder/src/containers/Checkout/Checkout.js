// Note about containers: there are statefull components that manage their own state,
// and pass them to other stateless components.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  cancelCheckoutHandler = () => {
    const { history } = this.props;
    history.goBack();
  }

  confirmCheckoutHandler = () => {
    const { history } = this.props;
    history.replace({ pathname: 'checkout/customer-data' });
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

Checkout.propTypes = {
  history: PropTypes.object.isRequired
};

export default Checkout;
