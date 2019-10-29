import React, { Component } from 'react';

import { connect } from 'react-redux';

import classes from './Orders.css';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import OrderItem from './Order/OrderItem';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actionCreators from '../../store/actions/index';

class Orders extends Component {
  state = {
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
    const { loading } = this.state;
    const { orders } = this.props;

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

Orders.propTypes = {
  // orders: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  orders: state.orders.ingredients
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: () =>
    dispatch(actionCreators.fetchOrders()),
  removeIngredientHandler: order =>
    dispatch(actionCreators.saveOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
