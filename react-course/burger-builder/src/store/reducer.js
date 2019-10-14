import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0
  },
  totalPrice: 0
};

const INGREDIENT_PRICES = {
  salad: 1.5,
  bacon: 3,
  cheese: 4,
  meat: 10
};

const reducer = (state = initialState, action) => {
  // const updatedIngredients = null;
  // const oldCount = 0;
  // const updatedCount = 0;
  // const priceAddition = 0;
  // const priceDecrement = 0;
  // const oldPrice = 0;
  // const newPrice = 0;

  // In order to understand how to update nested objects (like in this case),
  // read this article: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientType]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientType]
      };
    default:
      return state;
  }
};

export default reducer;
