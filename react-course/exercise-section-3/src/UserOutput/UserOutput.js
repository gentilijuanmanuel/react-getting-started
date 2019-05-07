import React from 'react';
import './UserOutput.css';

const userOutput = props => {
    return(
        <div>
            <h1 className="title">Hi, { props.username }</h1>
        </div>
    );
}

export default userOutput;