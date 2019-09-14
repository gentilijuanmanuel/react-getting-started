// Note about containers: there are statefull components that manage their own state,
// and pass them to other stateless components.
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }

  componentDidMount() {
    const { location } = this.props;

    if (location.state) {
      this.setState({
        ingredients: location.state.ingredients,
        totalPrice: location.state.totalPrice
      });
    }
  }

  cancelCheckoutHandler = () => {
    const { history } = this.props;
    history.goBack();
  }

  confirmCheckoutHandler = () => {
    const { history } = this.props;
    history.replace({ pathname: 'checkout/contact-data' });
  }

  render() {
    const { match } = this.props;
    const { ingredients, totalPrice } = this.state;

    // eslint-disable-next-line prefer-template
    const contactDataPath = match.path + '/contact-data';

    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          cancelCheckoutClicked={this.cancelCheckoutHandler}
          confirmCheckoutClicked={this.confirmCheckoutHandler}
        />
        <Route path={contactDataPath} render={props => (<ContactData ingredients={ingredients} totalPrice={totalPrice} {...props} />)} />
      </div>
    );
  }
}

// TODO: be more specific
Checkout.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Checkout;
