import React from 'react';

//Fuction component WITHOUT arrow functions
// export default function Person() {
//     return <p>Hello, I'm a person!</p>
// }

//Fuction component WITH arrow functions
const person = (props) => {
    return(
        <div>
            <p>Hello, I'm { props.name } and I'm { props.age } years old !</p>
            <p>{ props.children }</p>
        </div>
    );
}

export default person;