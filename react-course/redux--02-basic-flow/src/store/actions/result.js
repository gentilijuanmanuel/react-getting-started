import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  }
}

export const storeResult = (result) => {
  // Async code goes on Action Creators
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  }
}

export const deleteResult = (resultElementId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: resultElementId
  }
}
