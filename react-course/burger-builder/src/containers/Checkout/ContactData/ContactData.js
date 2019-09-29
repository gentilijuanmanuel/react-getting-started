import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import createFormElementHelper from '../../../helpers/FormElementBuilder';

import classes from './ContactData.css';

class ContactData extends Component {
  // Validation is min length 3 max length 5 for all the fields.
  state = {
    orderForm: {
      name: createFormElementHelper('Name', 'input', 'text', null, 'Your name', '', true, 3, 5, 'Please enter a valid name'),
      email: createFormElementHelper('E-mail', 'input', 'email', null, 'Your email', '', true, 3, 5, 'Please enter a valid email'),
      country: createFormElementHelper('Country', 'input', 'text', null, 'Your country', '', true, 3, 5, 'Please enter a valid country'),
      street: createFormElementHelper('Street', 'input', 'text', null, 'Your street', '', true, 3, 5, 'Please enter a valid street'),
      postal: createFormElementHelper('Postal', 'input', 'text', null, 'Your postal', '', true, 3, 5, 'Please enter a valid postal'),
      deliveryMethod: createFormElementHelper(
        'Delivery method',
        'select',
        null,
        [{ value: 'fastest', displayValue: 'Fastest' }, { value: 'cheapest', displayValue: 'Cheapest' }],
        'Choose a delivery method',
        '',
        true
      )
    },
    canSubmit: false,
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

    const customer = {};

    Object.keys(orderForm).forEach((orderFormElementKey) => {
      customer[orderFormElementKey] = orderForm[orderFormElementKey].value;
    });

    const order = {
      ingredients,
      totalPrice,
      customer
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

  // TODO: ask about that
  inputChangedHandler = (event, formElementId) => {
    const { orderForm } = this.state;

    orderForm[formElementId].value = event.target.value;
    orderForm[formElementId].touched = true;
    orderForm[formElementId].isValid = this.checkValidity(
      orderForm[formElementId].value,
      orderForm[formElementId].validationRules
    );

    let canSubmit = true;
    Object.keys(orderForm).forEach((orderFormKey) => {
      if (!orderForm[orderFormKey].isValid) {
        canSubmit = false;
      }
    });

    this.setState({ orderForm, canSubmit });
  }

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid;
  }

  render() {
    const {
      loading, orderForm, canSubmit
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
                  invalid={!formElement.config.isValid}
                  touched={formElement.config.touched}
                  validationErrorMessage={formElement.config.validationErrorMessage}
                  changed={event => this.inputChangedHandler(event, formElement.id)}
                />
              ))
            }
            <Button disabled={!canSubmit} btnType="Success">ORDER</Button>
          </form>
        </div>
      );
    }

    return contactData;
  }
}

// TODO: fix me, object is too general
ContactData.propTypes = {
  history: PropTypes.object.isRequired,
  ingredients: PropTypes.object,
  totalPrice: PropTypes.number.isRequired
};

ContactData.defaulTypes = {
  ingredients: null
};

export default ContactData;
