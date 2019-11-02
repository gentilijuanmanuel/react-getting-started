import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  error: false,
  loading: false,
  purchased: false
};

const setOrders = (state, action) => {
  const updatedState = {
    orders: action.orders,
    error: false,
    loading: false
  };
  return updateObject(state, updatedState);
};

const fetchOrdersStart = (state) => {
  const updatedState = { loading: true };
  return updateObject(state, updatedState);
};

const fetchOrdersFailed = (state) => {
  const updatedState = {
    error: true,
    loading: false
  };
  return updateObject(state, updatedState);
};

const purchaseOrderSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  };
  const updatedOrders = state.orders.concat(newOrder);
  const updatedState = {
    loading: false,
    purchased: true,
    orders: updatedOrders
  };
  // Note: this has no sense, since we are fetching the orders from the server when we go to My orders tab
  return updateObject(state, updatedState);
};

const purchaseOrderFail = (state) => {
  const updatedState = {
    loading: false,
    error: true
  };
  return updateObject(state, updatedState);
};

const purchaseInit = (state) => {
  const updatedState = { purchased: false };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS: return setOrders(state, action);
    case actionTypes.FETCH_PURCHASE_ORDERS_START: return fetchOrdersStart(state);
    case actionTypes.FETCH_ORDERS_FAILED: return fetchOrdersFailed(state);
    case actionTypes.PURCHASE_ORDER_SUCCESS: return purchaseOrderSuccess(state, action);
    case actionTypes.PURCHASE_ORDER_FAIL: return purchaseOrderFail(state);
    case actionTypes.PURCHASE_INIT: return purchaseInit(state);
    default: return state;
  }
};

export default reducer;
