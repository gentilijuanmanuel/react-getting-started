import React from 'react';
import '../Person/Person.css';
import Radium from 'radium';

//Fuction component WITHOUT arrow functions
// export default function Person() {
//     return <p>Hello, I'm a person!</p>
// }

//Fuction component WITH arrow functions
const person = (props) => {
    const personStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return(
         <div className="Person" style={personStyle}>
            <p onClick={ props.click } >Hello, I'm { props.name } and I'm { props.age } years old !</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
    );
}

export default Radium(person);