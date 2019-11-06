import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import createFormElementHelper from '../../helpers/FormElementBuilder';

import classes from './Auth.css';

class Auth extends Component {
  state = {
    signUpForm: {
      email: createFormElementHelper('E-mail', 'input', 'email', null, 'Your email', '', true, 3, 5, 'Please enter a valid email'),
      password: createFormElementHelper('Password', 'input', 'password', null, 'Your password', '', true, 3, 5, 'Please enter a valid password'),
    }
  }

  inputChangedHandler = (event, formElementId) => {
    const { signUpForm } = this.state;

    const updatedForm = {
      ...signUpForm,
      [formElementId]: {
        ...signUpForm[formElementId],
        value: event.target.value,
        isValid: this.checkValidity(event.target.value, signUpForm[formElementId].validationRules),
        touched: true
      }
    };

    this.setState({ signUpForm: updatedForm });
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
    const { signUpForm } = this.state;

    const formElementsArray = [];

    Object.keys(signUpForm).forEach((formElementKey) => {
      formElementsArray.push({
        id: formElementKey,
        config: signUpForm[formElementKey]
      });
    });

    const form = formElementsArray.map(formElement => (
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
      ));

    return (
      <div className={classes.Auth}>
        <form>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div> 
    );
  }
}

export default Auth;
