// Note about containers: there are statefull components that manage their own state,
// and pass them to other stateless components.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import axios from '../../axios-orders';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actionCreators from '../../store/actions/index';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    const { fetchIngredientsHandler } = this.props;

    fetchIngredientsHandler();
  }

  // eslint-disable-next-line react/sort-comp
  updatePurchasedState = (ingredients) => {
    const sum = Object.keys(ingredients)
                      .map(ingredientKey => ingredients[ingredientKey])
                      .reduce((acumulator, element) => acumulator + element, 0);

    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  }

  purchaseContinueHandler = () => {
    const { history, initPurchaseHandler } = this.props;

    initPurchaseHandler();

    history.push({ pathname: '/checkout' });
  }

  render() {
    const { purchasing } = this.state;

    const {
      ingredients, totalPrice, addIngredientHandler, removeIngredientHandler, error
    } = this.props;

    let burger = error ? <p>Ingredients cannot be loaded :( </p> : <Spinner />;

    let orderSummary;

    if (ingredients) {
      const disabledInfo = {
        ...ingredients
      };

      // Not recommended by es-lint
      // for (const ingredientKey in disabledInfo) {
      //   if (disabledInfo.hasOwnProperty(ingredientKey)) {disabledInfo[ingredientKey] = disabledInfo[ingredientKey] <= 0;}
      // }

      // Recommended by es-lint
      Object.keys(disabledInfo).forEach((ingredientKey) => {
        disabledInfo[ingredientKey] = disabledInfo[ingredientKey] <= 0;
      });

      burger = (
        <Aux>
          <Burger ingredients={ingredients} />
          <BuildControls
            currentPrice={totalPrice}
            disabledInfo={disabledInfo}
            addIngredient={addIngredientHandler}
            removeIngredient={removeIngredientHandler}
            canPurchase={this.updatePurchasedState(ingredients)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          totalPrice={totalPrice}
          ingredients={ingredients}
          cancelOrder={this.purchaseCancelHandler}
          confirmOrder={this.purchaseContinueHandler}
        />
      );
    }

    return (
      <Aux>
        <Modal show={purchasing} closeModal={this.purchaseCancelHandler}>
          { orderSummary }
        </Modal>
        { burger }
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {
  history: PropTypes.object.isRequired,
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
  fetchIngredientsHandler: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  initPurchaseHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ingredients: state.burgerBuilder.ingredients,
  totalPrice: state.burgerBuilder.totalPrice,
  error: state.burgerBuilder.error
});

const mapDispatchToProps = dispatch => ({
  addIngredientHandler: ingredientType =>
    dispatch(actionCreators.addIngredient(ingredientType)),
  removeIngredientHandler: ingredientType =>
    dispatch(actionCreators.removeIngredient(ingredientType)),
  fetchIngredientsHandler: () =>
    dispatch(actionCreators.initIngredients()),
  initPurchaseHandler: () =>
    dispatch(actionCreators.purchaseInit())
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
