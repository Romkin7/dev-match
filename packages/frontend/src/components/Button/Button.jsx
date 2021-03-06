import React from 'react';
import './Button.scss';

const Button = ({ type, color, buttonText, size, clicHandler }) => {
    return (
        <button
            type={type}
            className={'button button_' + color + ' ' + size}
            onClick={(event) => clicHandler(event)}
        >
            {buttonText}
        </button>
    );
};

export default Button;
