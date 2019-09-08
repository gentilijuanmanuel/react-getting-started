import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 1.5,
  bacon: 3,
  cheese: 4,
  meat: 10
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchased: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get('/ingredients.json')
         .then((response) => {
           const totalPrice = this.calculateInitialPrice(response.data);
           this.setState({
             ingredients: response.data,
             totalPrice,
             purchased: totalPrice > 0
           });
         })
         .catch((error) => {
           console.error(error);
           this.setState({ error: true });
         });
  }

  // eslint-disable-next-line react/sort-comp
  updatePurchasedState(ingredients) {
    const sum = Object.keys(ingredients)
                      .map(ingredientKey => ingredients[ingredientKey])
                      .reduce((acumulator, element) => acumulator + element, 0);

    this.setState({
      purchased: sum > 0
    });
  }

  calculateInitialPrice = ingredients => Object.keys(ingredients)
                 .map(ingredientKey => ingredients[ingredientKey] * INGREDIENT_PRICES[ingredientKey])
                 .reduce((acumulator, element) => acumulator + element, 0)

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
    this.props.history.push({ pathname: '/checkout' });

    // const { ingredients, totalPrice } = this.state;

    // this.setState({
    //   loading: true
    // });

    // const order = {
    //   ingredients,
    //   totalPrice,
    //   customer: {
    //     name: 'Juan Manuel Gentili',
    //     addres: {
    //       street: 'Test street 1',
    //       zipCode: '1234',
    //       country: 'Argentina'
    //     },
    //     email: 'gentili@gmail.com',
    //     deliveryMethod: 'fastest'
    //   }
    // };

    // axios.post('/orders.json', order)
    //      .then((response) => {
    //         console.log(response);
    //         this.setState({
    //           loading: false,
    //           purchasing: false
    //         });
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       this.setState({
    //         loading: false,
    //         purchasing: false
    //       });
    //     });
  }

  render() {
    const {
      ingredients, totalPrice, purchased, purchasing, loading, error
    } = this.state;

    let burger = error ? <p>Ingredients can't be loaded :( </p> : <Spinner />;

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
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            canPurchase={purchased}
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

    console.log(purchased);

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

export default withErrorHandler(BurgerBuilder, axios);
