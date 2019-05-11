import React from 'react';

const LengthValidation = props => {
    return (
        <p>{props.textLength >= 5 ? 'Text long enough' : 'Text too short'}</p>
    );
}

export default LengthValidation;