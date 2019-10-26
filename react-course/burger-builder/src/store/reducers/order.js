import * as actionTypes from '../actions/actionTypes';

import axios from '../../axios-orders';

const initialState = {
  orders: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS:
      return {
        ...state
      };
    case actionTypes.SAVE_ORDER:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
