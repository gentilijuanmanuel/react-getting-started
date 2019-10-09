import * as actionTypes from '../actions';

const initialState = {
  counter: 0,
  results: []
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.counter
      }
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.counter
      }
    default:
      return state;
  }
}

export default counterReducer;
