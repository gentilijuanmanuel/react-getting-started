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
      name: createFormElementHelper('input', 'text', null, 'Your name', ''),
      email: createFormElementHelper('input', 'email', null, 'Your email', ''),
      country: createFormElementHelper('input', 'text', null, 'Your country', ''),
      street: createFormElementHelper('input', 'text', null, 'Your street', ''),
      postal: createFormElementHelper('input', 'text', null, 'Your postal', ''),
      deliveryMethod: createFormElementHelper(
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

    const {
      name, email, address 
    } = this.state;

    const { ingredients, totalPrice } = this.props;

    const { history } = this.props;

    this.setState({
      loading: true
    });

    // TODO: refactor when implementing forms.
    // const order = {
    //   ingredients,
    //   totalPrice,
    //   customer: {
    //     name,
    //     email,
    //     addres: {
    //       street: address.street,
    //       postal: address.postal,
    //     }
    //   }
    // };

    const order = {
      ingredients,
      totalPrice,
      customer: {
        name: 'Juan',
        email: 'juan@blabla.com',
        address: {
          street: 'Street 1',
          postal: 'Whatever',
        }
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
          {
            formElementsArray.map(formElement => (
              <Input
                key={formElement.id}
                inputtype={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                // value={inputElement.value}
                value={formElement.config.value}
              />
            ))
          }
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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
