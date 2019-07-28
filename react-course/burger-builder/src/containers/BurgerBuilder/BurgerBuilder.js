import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

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
    purchasing: false
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

  closeModalHandler = () => {
    this.setState({
      purchasing: false
    });
  }

  render() {
    const {
      ingredients, totalPrice, purchased, purchasing
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

    return (
      <Aux>
        <Modal show={purchasing} closeModal={this.closeModalHandler}>
          <OrderSummary ingredients={ingredients} />
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

export default BurgerBuilder;
