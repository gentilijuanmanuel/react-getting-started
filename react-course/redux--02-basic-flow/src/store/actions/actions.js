export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBSTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const add = (counter) => {
  return {
    type: ADD,
    counter: counter
  }
}

export const subtract = (counter) => {
  return {
    type: SUBTRACT,
    counter: counter
  }
}

export const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    result: result
  }
}

export const deleteResult = (resultElementId) => {
  return {
    type: DELETE_RESULT,
    resultElementId: resultElementId
  }
}