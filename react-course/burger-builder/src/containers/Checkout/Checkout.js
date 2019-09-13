// Note about containers: there are statefull components that manage their own state,
// and pass them to other stateless components.
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  cancelCheckoutHandler = () => {
    const { history } = this.props;
    history.goBack();
  }

  confirmCheckoutHandler = () => {
    const { history } = this.props;
    history.replace({ pathname: 'checkout/contact-data' });
  }

  render() {
    // eslint-disable-next-line prefer-template
    const contactDataPath = this.props.match.path + '/contact-data';

    return (
      <div>
        <CheckoutSummary
          cancelCheckoutClicked={this.cancelCheckoutHandler}
          confirmCheckoutClicked={this.confirmCheckoutHandler}
        />
        <Route path={contactDataPath} component={ContactData} />
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.object.isRequired
};

export default Checkout;
