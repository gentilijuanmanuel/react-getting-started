import React from 'react';
import './Char.css';

const Char = props => {
    return(
        <div onClick={props.click} className="boxStyle">
            <p>{props.char}</p>
        </div>
    );
}

export default Char;