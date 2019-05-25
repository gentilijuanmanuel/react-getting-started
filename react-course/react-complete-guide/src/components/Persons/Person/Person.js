import React from 'react';
import personClasses from './Person.css';

// Fuction component WITHOUT arrow functions
// export default function Person() {
//     return <p>Hello, I'm a person!</p>
// }

// Fuction component WITH arrow functions
const person = props => 

    // Simulation of an error in order to test ErrorBoundaries
    // const random = Math.random();

    // if(random > 0.7) {
    //     throw new Error('Something went wrong :(');
    // }

    (
      <div className={personClasses.person}>
        <p onClick={props.click}>
          Hello, I&apos;m
          {' '}
          {props.name}
          {' '}
          and I&apos;m
          {' '}
          {props.age}
          {' '}
          years old!
        </p>
        <p>
          {props.children}
        </p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    );

export default person;
