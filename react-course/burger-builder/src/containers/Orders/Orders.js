import React, { Component } from 'react';

import axios from '../../axios-orders';

import OrderItem from './Order/OrderItem';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
  state = {
    orders: null,
    loading: true
  }

  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders = () => {
    axios.get('/orders.json')
         .then((response) => {
           this.setState({
             orders: response.data,
             loading: false
           });
         })
         .catch((error) => {
           console.error(error);
           this.setState({
             loading: false
           });
         });
  }

  render() {
    const { orders, loading } = this.state;

    let ordersList = <Spinner />;

    if (!loading && orders != null) {
      ordersList = Object.keys(orders)
        .map(orderKey => <OrderItem key={orderKey} order={orders[orderKey]} />);
    }

    return (
      <div>
        {ordersList}
      </div>
    );
  }
}

export default Orders;
