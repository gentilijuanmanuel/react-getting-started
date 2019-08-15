import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 1.5,
  bacon: 3,
  cheese: 4,
  meat: 10
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchased: false,
    purchasing: false,
    loading: false
  };

  // eslint-disable-next-line react/sort-comp
  updatePurchasedState(ingredients) {
    const sum = Object.keys(ingredients)
                      .map(ingredientKey => ingredients[ingredientKey])
                      .reduce((acumulator, element) => acumulator + element, 0);

    this.setState({
      purchased: sum > 0
    });
  }

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;

    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });

    this.updatePurchasedState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;

    const oldCount = ingredients[type];
    const updatedCount = oldCount - 1;

    const updatedIngredients = {
      ...ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceDecrement = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDecrement;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });

    this.updatePurchasedState(updatedIngredients);
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
    const { ingredients, totalPrice } = this.state;

    this.setState({
      loading: true
    });

    const order = {
      ingredients,
      totalPrice,
      customer: {
        name: 'Juan Manuel Gentili',
        addres: {
          street: 'Test street 1',
          zipCode: '1234',
          country: 'Argentina'
        },
        email: 'gentili@gmail.com',
        deliveryMethod: 'fastest'
      }
    };

    axios.post('/orders.json', order)
         .then((response) => {
            console.log(response);
            this.setState({
              loading: false,
              purchasing: false
            });
        })
        .catch((error) => {
          console.error(error);
          this.setState({
            loading: false,
            purchasing: false
          });
        });
  }

  render() {
    const {
      ingredients, totalPrice, purchased, purchasing, loading
    } = this.state;

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

    let orderSummary = (
      <OrderSummary
        loading={loading}
        totalPrice={totalPrice}
        ingredients={ingredients}
        cancelOrder={this.purchaseCancelHandler}
        confirmOrder={this.purchaseContinueHandler}
      />
    );
    if (loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={purchasing} closeModal={this.purchaseCancelHandler}>
          { orderSummary }
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          currentPrice={totalPrice}
          disabledInfo={disabledInfo}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          canPurchase={purchased}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
