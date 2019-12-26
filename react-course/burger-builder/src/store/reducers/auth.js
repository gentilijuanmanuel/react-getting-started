import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const startAuth = (state, action) => updateObject(state, { error: null, loading: true });

const handleAuthSuccess = (state, action) => updateObject(state, {
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false
  });

const handleAuthFail = (state, action) => updateObject(state, {
  error: action.error,
  loading: false
});

const handleAuthLogout = (state, action) => updateObject(state, {
  userId: null,
  token: null
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return startAuth(state, action);
    case actionTypes.AUTH_SUCCESS: return handleAuthSuccess(state, action);
    case actionTypes.AUTH_FAIL: return handleAuthFail(state, action);
    case actionTypes.AUTH_LOGOUT: return handleAuthLogout(state, action);
    default: return state;
  }
};

export default reducer;
