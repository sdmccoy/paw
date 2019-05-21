import React from 'react';

const Button = ({key, onClick, name}) => {
    return (
        <button key={key} onClick={onClick}>{ name }</button>
    );
}

export default Button;