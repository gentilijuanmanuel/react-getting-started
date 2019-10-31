import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

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
  let updatedIngredient;
  let updatedIngredients;
  let updatedState;

  // In order to understand how to update nested objects (like in this case),
  // read this article: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      updatedIngredient = { [action.ingredientType]: state.ingredients[action.ingredientType] + 1 };
      updatedIngredients = updateObject(state.ingredients, updatedIngredient);
      updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientType]
      };
      return updateObject(state, updatedState);
    case actionTypes.REMOVE_INGREDIENT:
      updatedIngredient = { [action.ingredientType]: state.ingredients[action.ingredientType] - 1 };
      updatedIngredients = updateObject(state.ingredients, updatedIngredient);
      updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientType]
      };
      return updateObject(state, updatedState);
    case actionTypes.SET_INGREDIENTS:
      updatedState = {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        totalPrice: calculateInitialPrice(action.ingredients),
        error: false
      };
      return updateObject(state, updatedState);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      updatedState = { error: true };
      return updateObject(state, updatedState);
    default:
      return state;
  }
};

export default reducer;
