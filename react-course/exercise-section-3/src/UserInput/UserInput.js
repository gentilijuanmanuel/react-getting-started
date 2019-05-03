import React from 'react';

const userInput = props => {
    return(
        <input
            type="text"
            onChange={ props.usernameChanged }
            value={ props.username } />
    );
}

export default userInput;