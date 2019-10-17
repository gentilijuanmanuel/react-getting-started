import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const add = (counter) => {
  return {
    type: actionTypes.ADD,
    counter: counter
  }
}

export const subtract = (counter) => {
  return {
    type: actionTypes.SUBTRACT,
    counter: counter
  }
}
