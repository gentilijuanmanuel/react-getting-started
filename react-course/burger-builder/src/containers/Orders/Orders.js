import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import classes from './Orders.css';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import OrderItem from './Order/OrderItem';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actionCreators from '../../store/actions/index';

class Orders extends Component {
  componentDidMount() {
    const { fetchOrdersHandler } = this.props;

    fetchOrdersHandler();
  }

  render() {
    const { orders, error, loading } = this.props;

    let ordersList = <Spinner />;
    if (!loading) {
      if (error) {
        ordersList = <p className={classes.centeredText}>Orders cannot be loaded :(</p>;
      } else if (orders) {
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

Orders.propTypes = {
  orders: PropTypes.array.isRequired,
  fetchOrdersHandler: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  orders: state.orders.orders,
  error: state.orders.error,
  loading: state.orders.loading
});

const mapDispatchToProps = dispatch => ({
  fetchOrdersHandler: () =>
    dispatch(actionCreators.fetchOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
