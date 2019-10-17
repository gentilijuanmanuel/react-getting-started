import * as actionTypes from '../actions/actionTypes';

const initialState = {
  counter: 0
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
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.counter
      }
    default:
      return state;
  }
}

export default counterReducer;
