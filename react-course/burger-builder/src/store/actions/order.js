import * as actionTypes from './actionTypes';

export const fetchOrders = () => ({
  type: actionTypes.FETCH_ORDERS
});

export const saveOrder = () => ({
  type: actionTypes.SAVE_ORDER
});
