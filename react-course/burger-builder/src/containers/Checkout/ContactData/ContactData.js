import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import createFormElementHelper from '../../../helpers/FormElementBuilder';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    orderForm: {
      name: createFormElementHelper('Name', 'input', 'text', null, 'Your name', ''),
      email: createFormElementHelper('E-mail', 'input', 'email', null, 'Your email', ''),
      country: createFormElementHelper('Country', 'input', 'text', null, 'Your country', ''),
      street: createFormElementHelper('Street', 'input', 'text', null, 'Your street', ''),
      postal: createFormElementHelper('Postal', 'input', 'text', null, 'Your postal', ''),
      deliveryMethod: createFormElementHelper(
        'Delivery method',
        'select',
        null,
        [{ value: 'fastest', displayValue: 'Fastest' }, { value: 'cheapest', displayValue: 'Cheapest' }],
        'Choose a delivery method',
        ''
      )
    },
    loading: false
  };

  orderHandler = (event) => {
    // preventDefault() is called to prevent the reload of the page,
    // done by native the HTML element (button).
    event.preventDefault();

    const { orderForm } = this.state;
    const { ingredients, totalPrice, history } = this.props;

    this.setState({
      loading: true
    });

    const order = {
      ingredients,
      totalPrice,
      customer: {
        name: orderForm.name.value,
        email: orderForm.email.value,
        country: orderForm.country.value,
        street: orderForm.street.value,
        postal: orderForm.postal.value,
        deliveryMethod: orderForm.deliveryMethod.value,
      }
    };

    axios.post('/orders.json', order)
         .then((response) => {
            console.log(response);
            this.setState({
              loading: false
            });

            history.replace({ pathname: '/' });
        })
        .catch((error) => {
          console.error(error);
          this.setState({
            loading: false
          });
        });
  }

  inputChangedHanlder = (event, formElementId) => {
    const { orderForm } = this.state;

    orderForm[formElementId].value = event.target.value;

    this.setState({
      orderForm
    });
  }

  render() {
    const {
      loading, orderForm
    } = this.state;

    let contactData = <Spinner />;

    if (!loading) {
      const formElementsArray = [];

      Object.keys(orderForm).forEach((formElementKey) => {
        formElementsArray.push({
          id: formElementKey,
          config: orderForm[formElementKey]
        });
      });

      contactData = (
        <div className={classes.ContactData}>
          <h4>Enter your contact data</h4>
          <form onSubmit={this.orderHandler}>
            {
              formElementsArray.map(formElement => (
                <Input
                  key={formElement.id}
                  label={formElement.config.name}
                  inputtype={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  changed={event => this.inputChangedHanlder(event, formElement.id)}
                />
              ))
            }
            <Button btnType="Success">ORDER</Button>
          </form>
        </div>
      );
    }

    return contactData;
  }
}

// TODO: fix me
ContactData.propTypes = {
  history: PropTypes.object.isRequired,
  ingredients: PropTypes.object,
  totalPrice: PropTypes.number.isRequired
};

ContactData.defaulTypes = {
  ingredients: null
};

export default ContactData;