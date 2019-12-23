import * as actionTypes from './actionTypes';
import apiKey from '../../../local/api_keys';

import axios from '../../axios-orders';

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = authData => ({
  type: actionTypes.AUTH_SUCCESS,
  authData
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const auth = (email, password) => (dispatch) => {
  dispatch(authStart());

  const authData = {
    email,
    password,
    returnSecureToken: true
  };

  axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, authData)
       .then((response) => {
         console.log(response);
         dispatch(authSuccess(response));
       })
       .catch((error) => {
         console.error(error);
         dispatch(authFail(error));
       });
};
