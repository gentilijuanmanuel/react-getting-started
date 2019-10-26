import React, { Component } from 'react';

import classes from './Orders.css';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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

    if (!loading) {
      if (orders) {
        ordersList = Object.keys(orders)
          .map(orderKey => <OrderItem key={orderKey} order={orders[orderKey]} />);
      } else {
        ordersList = <p className={classes.centeredText}>There are no orders to fetch.</p>;
      }
    }

    return (
      <div>
        {ordersList}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
