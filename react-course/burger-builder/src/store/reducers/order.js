import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  error: false,
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  let newOrder;
  let updatedState;
  let updatedOrders;

  switch (action.type) {
    case actionTypes.SET_ORDERS:
      updatedState = {
        orders: action.orders,
        error: false,
        loading: false
      };
      return updateObject(state, updatedState);
    case actionTypes.FETCH_PURCHASE_ORDERS_START:
      updatedState = { loading: true };
      return updateObject(state, updatedState);
    case actionTypes.FETCH_ORDERS_FAILED:
      updatedState = {
        error: true,
        loading: false
      };
      return updateObject(state, updatedState);
    case actionTypes.PURCHASE_ORDER_SUCCESS:
      newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      updatedOrders = state.orders.concat(newOrder);
      updatedState = {
        loading: false,
        purchased: true,
        orders: updatedOrders
      };
      // Note: this has no sense, since we are fetching the orders from the server when we go to My orders tab
      return updateObject(state, updatedState);
    case actionTypes.PURCHASE_ORDER_FAIL:
      updatedState = {
        loading: false,
        error: true
      };
      return updateObject(state, updatedState);
    case actionTypes.PURCHASE_INIT:
      updatedState = { purchased: false };
      return updateObject(state, updatedState);
    default:
      return state;
  }
};

export default reducer;
