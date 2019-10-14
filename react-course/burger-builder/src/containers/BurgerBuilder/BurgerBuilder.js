// Note about containers: there are statefull components that manage their own state,
// and pass them to other stateless components.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 1.5,
  bacon: 3,
  cheese: 4,
  meat: 10
};
class BurgerBuilder extends Component {
  state = {
    // TODO: fix me
    // ingredients: null,
    // totalPrice: 0,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get('/ingredients.json')
         .then((response) => {
           // const totalPrice = this.calculateInitialPrice(response.data);
           this.setState({
             // TODO: fix me
             // ingredients: response.data,
             // totalPrice,
             // purchased: totalPrice > 0
           });
         })
         .catch((error) => {
           console.error(error);
           this.setState({ error: true });
         });
  }

  // eslint-disable-next-line react/sort-comp
  updatePurchasedState = (ingredients) => {
    const sum = Object.keys(ingredients)
                      .map(ingredientKey => ingredients[ingredientKey])
                      .reduce((acumulator, element) => acumulator + element, 0);

    return sum > 0;
  }

  calculateInitialPrice = ingredients =>
    Object.keys(ingredients)
          .map(ingredientKey => ingredients[ingredientKey] * INGREDIENT_PRICES[ingredientKey])
          .reduce((acumulator, element) => acumulator + element, 0)

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
    const { history } = this.props;
    history.push({ pathname: '/checkout' });
  }

  render() {
    const {
      purchasing, loading, error
    } = this.state;

    const {
      ingredients, totalPrice, addIngredientHandler, removeIngredientHandler 
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
          loading={loading}
          totalPrice={totalPrice}
          ingredients={ingredients}
          cancelOrder={this.purchaseCancelHandler}
          confirmOrder={this.purchaseContinueHandler}
        />
      );
    }

    if (loading) {
      orderSummary = <Spinner />;
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
  removeIngredientHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  addIngredientHandler: ingredientType =>
    dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientType }),
  removeIngredientHandler: ingredientType =>
    dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientType })
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
