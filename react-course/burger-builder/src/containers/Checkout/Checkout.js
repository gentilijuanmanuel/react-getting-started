// Note about containers: there are statefull components that manage their own state,
// and pass them to other stateless components.
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    const { match } = this.props;
    const { ingredients, purchased } = this.props;

    // eslint-disable-next-line prefer-template
    const contactDataPath = match.path + '/contact-data';

    let summary = <Redirect to="/" />;

    if (ingredients) {
      const purchasedRedirect = purchased ? <Redirect to="/" /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={ingredients}
            cancelCheckoutClicked={this.cancelCheckoutHandler}
            confirmCheckoutClicked={this.confirmCheckoutHandler}
          />
          <Route path={contactDataPath} component={ContactData} />
        </div>
      );
    }

    return summary;
  }
}

// TODO: be more specific
Checkout.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  ingredients: PropTypes.object.isRequired,
  purchased: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  ingredients: state.burgerBuilder.ingredients,
  purchased: state.orders.purchased
});

export default connect(mapStateToProps)(Checkout);
