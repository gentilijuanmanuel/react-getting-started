import * as actionTypes from './actions';

const initialState = {
  persons: []
}

const personReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      }
      return {
        persons: state.persons.concat(newPerson)
      }
    case actionTypes.REMOVE_PERSON:
      const updatedPersons = state.persons.filter(person => person.id !== action.personId);
      return {
        persons: updatedPersons
      }
    default:
      return state;
  }
}

export default personReducer;
