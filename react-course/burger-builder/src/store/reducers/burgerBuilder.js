import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: null,
  error: false,
  totalPrice: 0
};

const INGREDIENT_PRICES = {
  salad: 1.5,
  bacon: 3,
  cheese: 4,
  meat: 10
};

const calculateInitialPrice = ingredients =>
    Object.keys(ingredients)
          .map(ingredientKey => ingredients[ingredientKey] * INGREDIENT_PRICES[ingredientKey])
          .reduce((acumulator, element) => acumulator + element, 0);

const reducer = (state = initialState, action) => {
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
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: calculateInitialPrice(action.ingredients),
        error: false
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
