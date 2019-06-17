import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import personClasses from './Person.css';
import withClass from '../../../hoc/withClass';

// Fuction component WITHOUT arrow functions
// export default function Person() {
//     return <p>Hello, I'm a person!</p>
// }

// Fuction component WITH arrow functions
const person = (props) => {
  const {
    click, name, age, children, changed 
  } = props;
  // Simulation of an error in order to test ErrorBoundaries
  // const random = Math.random();

  // if(random > 0.7) {
  //     throw new Error('Something went wrong :(');
  // }
  
  return (
    /* React.Fragment is a built-in HOC to wrap other components. */
    /* <React.Fragment> */
    // <Aux>
    <div>
      <p onClick={click}>
          Hello, I&apos;m
        {' '}
        {name}
        {' '}
          and I&apos;m
        {' '}
        {age}
        {' '}
          years old!
      </p>
      <p>
        {children}
      </p>
      <input type="text" onChange={changed} value={name} />
    </div>
    // </Aux>
    /* </React.Fragment> */
  );
};

person.defaultProps = {
  children: undefined
};

person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.element,
  changed: PropTypes.func.isRequired
};

export default withClass(person, personClasses.person);
