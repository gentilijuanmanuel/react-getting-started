import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  const updatedResultsArray = state.results.filter(result => result.id !== action.resultElementId);
  return updateObject(state, { results: updatedResultsArray });
}

const resultReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, { results: state.results.concat({id: new Date(), value: action.result}) });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
}

export default resultReducer;
