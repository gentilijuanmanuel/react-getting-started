import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postal: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    // preventDefault() is called to prevent the reload of the page,
    // done by native the HTML element (button).
    event.preventDefault();

    const {
      ingredients, totalPrice, name, email, address 
    } = this.state;

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
        addres: {
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
      loading, name, email, address 
    } = this.state;

    let contactData = <Spinner />;

    if (!loading) {
      contactData = (
        <div className={classes.ContactData}>
          <h4>Enter your contact data</h4>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Name"
            // value={name}
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="E-mail"
            // value={email}
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
            // value={address.street}
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal"
            // value={address.postal}
          />
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </div>
      );
    }

    return contactData;
  }
}

// TODO: fix me
ContactData.propTypes = {
  history: PropTypes.object.isRequired
};

export default ContactData;
