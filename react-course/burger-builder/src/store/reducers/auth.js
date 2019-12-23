import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  authData: null,
  error: false
};

const startAuth = (state, action) => state;

const handleAuthSuccess = (state, action) => {

};

const handleAuthFail = (state, action) => {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return startAuth(state, action);
    case actionTypes.AUTH_SUCCESS: return handleAuthSuccess(state, action);
    case actionTypes.AUTH_FAIL: return handleAuthFail(state, action);
    default: return state;
  }
};

export default reducer;
