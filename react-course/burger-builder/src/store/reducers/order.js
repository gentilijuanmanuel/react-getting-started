import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  error: false,
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  let newOrder;

  switch (action.type) {
    case actionTypes.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
        error: false,
        loading: false
      };
    case actionTypes.FETCH_PURCHASE_ORDERS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ORDERS_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      };
    case actionTypes.PURCHASE_ORDER_SUCCESS:

      newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      
      // Note: this has no sense, since we are fetching the orders from the server when we go to My orders tab
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    default:
      return state;
  }
};

export default reducer;
