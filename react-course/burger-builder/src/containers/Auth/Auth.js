import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import createFormElementHelper from '../../helpers/FormElementBuilder';

import classes from './Auth.css';

import * as actionCreators from '../../store/actions/index';

class Auth extends Component {
  state = {
    loginForm: {
      email: createFormElementHelper('E-mail', 'input', 'email', null, 'Your email', '', true, 6, 20, 'Please enter a valid email'),
      password: createFormElementHelper('Password', 'input', 'password', null, 'Your password', '', true, 6, 20, 'Please enter a valid password'),
    },
    isSignUp: false
  }

  inputChangedHandler = (event, formElementId) => {
    const { loginForm } = this.state;

    const updatedForm = {
      ...loginForm,
      [formElementId]: {
        ...loginForm[formElementId],
        value: event.target.value,
        isValid: this.checkValidity(event.target.value, loginForm[formElementId].validationRules),
        touched: true
      }
    };

    this.setState({ loginForm: updatedForm });
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

  submitFormHandler = (event) => {
    const { loginHandler } = this.props;
    const { loginForm, isSignUp } = this.state;

    event.preventDefault();

    loginHandler(loginForm.email.value, loginForm.password.value, isSignUp);
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
  }

  render() {
    const { loginForm, isSignUp } = this.state;
    const { loading, error } = this.props;

    let form = <Spinner />;

    if (!loading) {
      const formElementsArray = [];

      Object.keys(loginForm).forEach((formElementKey) => {
        formElementsArray.push({
          id: formElementKey,
          config: loginForm[formElementKey]
        });
      });

      form = formElementsArray.map(formElement => (
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
    }

    let errorMessage = null;

    if (error) {
      errorMessage = (
        <p>{error.message}</p>
      );
    }

    return (
      <div className={classes.Auth}>
        <form onSubmit={this.submitFormHandler}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>CLICK TO {isSignUp ? ' SIGN IN' : ' SIGN UP'}</Button>
        {errorMessage}
      </div> 
    );
  }
}

Auth.propTypes = {
  loginHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};

 const mapStateToProps = state => ({
   loading: state.auth.loading,
   error: state.auth.error
 });

const mapDispatchToProps = dispatch => ({
  loginHandler: (email, password, isSignUp) =>
    dispatch(actionCreators.auth(email, password, isSignUp))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
