import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    addres: {
      street: '',
      postal: ''
    }
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <input className={classes.Input} type="text" name="name" placeholder="Name" />
        <input className={classes.Input} type="email" name="email" placeholder="E-mail" />
        <input className={classes.Input} type="text" name="street" placeholder="Street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Postal" />
        <Button btnType="Success">ORDER</Button>
      </div>
    );
  }
}

export default ContactData;
