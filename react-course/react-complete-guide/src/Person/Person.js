import React from 'react';
import '../Person/Person.css';

//Fuction component WITHOUT arrow functions
// export default function Person() {
//     return <p>Hello, I'm a person!</p>
// }

//Fuction component WITH arrow functions
const person = (props) => {

    return(
         <div className="Person">
            <p onClick={ props.click } >Hello, I'm { props.name } and I'm { props.age } years old !</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
    );
}

export default person;