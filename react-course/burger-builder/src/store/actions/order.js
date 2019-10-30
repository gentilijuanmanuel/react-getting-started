import * as actionTypes from './actionTypes';

import axios from '../../axios-orders';

export const setOrders = orders => ({
  type: actionTypes.SET_ORDERS,
  orders
});

export const fetchPurchaseOrdersStart = () => ({
  type: actionTypes.FETCH_PURCHASE_ORDERS_START,
});

export const fetchOrdersFailed = error => ({
  type: actionTypes.FETCH_ORDERS_FAILED,
  error
});

export const fetchOrders = () => (dispatch) => {
  dispatch(fetchPurchaseOrdersStart());
  axios.get('/orders.json')
       .then((response) => {
         const fetchedOrders = Object.keys(response.data)
                                     .map(orderKey => ({ ...response.data[orderKey], id: orderKey }));
                                     
         dispatch(setOrders(fetchedOrders));
       })
       .catch((error) => {
         console.error(error);
         dispatch(fetchOrdersFailed(error));
       });
};

export const purchaseOrderSuccess = (orderId, orderData) => ({
  type: actionTypes.PURCHASE_ORDER_SUCCESS,
  orderId,
  orderData
});

export const purchaseOrderFail = error => ({
  type: actionTypes.PURCHASE_ORDER_FAIL,
  error
});

export const purchaseOrder = orderData => (dispatch) => {
  dispatch(fetchPurchaseOrdersStart());
  axios.post('/orders.json', orderData)
       .then((response) => {
         dispatch(purchaseOrderSuccess(response.data.name, orderData));
       })
       .catch((error) => {
         console.error(error);
         dispatch(purchaseOrderFail(error));
       });
};

export const purchaseInit = () => ({
  type: actionTypes.PURCHASE_INIT
});
