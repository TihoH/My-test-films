import React from 'react';

const MyInput = ({placeholder , dataValue ,type , ...props}) => {
    return (
        <input placeholder={placeholder} type={type} {...props} onChange={ e => dataValue(e.target.value)} />
    );
};

export default MyInput;