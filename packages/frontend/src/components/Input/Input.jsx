import React from 'react';
import './Input.scss';

const Input = ({ type, lable, required, disabled, name, changeHandler, value }) => {
    return (
        <>
            <lable for={name}>{lable}</lable>
            <input
                id={name}
                type={type}
                className="input"
                onChange={(event) => changeHandler(event)}
                value={value}
                required={required}
                disabled={disabled}
            />
        </>
    );
};

export default Input;
