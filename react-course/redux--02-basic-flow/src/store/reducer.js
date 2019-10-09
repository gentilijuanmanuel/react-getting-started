const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.counter
      }
    case 'SUBSTRACT':
      return {
        ...state,
        counter: state.counter - action.counter
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    case 'DELETE_RESULT':
      const updatedResult = state.results.filter(result => result.id !== action.resultElementId);

      return {
        ...state,
        results: updatedResult
      }
    default:
      return state;
  }
}

export default reducer;
