import React, { useState } from 'react';
import './Input.scss';

const Input = ({ type, lable, required, disabled, name }) => {
    const [value, setValue] = useState('');
    const changeHandler = (event) => {
        setValue(event.target.value);
    };
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
