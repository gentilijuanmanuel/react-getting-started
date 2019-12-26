import * as actionTypes from './actionTypes';
import apiKey from '../../local/api_keys';

import axios from '../../axios-orders';

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = (token, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  token,
  userId
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const logout = () => ({
  type: actionTypes.AUTH_LOGOUT
});

export const checkAuthTimeout = expirationTimeout => (dispatch) => {
  setTimeout(() => {
    dispatch(logout());
  }, (expirationTimeout * 1000));
};

export const auth = (email, password, isSignUp) => (dispatch) => {
  dispatch(authStart());

  const authData = {
    email,
    password,
    returnSecureToken: true
  };

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
  if (!isSignUp) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
  }

  axios.post(url, authData)
    .then((response) => {
      console.log(response);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch((error) => {
      console.error(error);
      dispatch(authFail(error.response.data.error));
    });
};
