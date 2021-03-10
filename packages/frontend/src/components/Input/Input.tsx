import React, { FC } from 'react';
import { App } from '../../../../types';
import './Input.scss';

interface IInputProps {
    type: App.supportedInputTypes;
    label: string;
    required: boolean;
    disabled: boolean;
    name: string;
    changeHandler: (event: any) => void;
    value: any;
}

const Input: FC<IInputProps> = ({
    type,
    label,
    required,
    disabled,
    name,
    changeHandler,
    value,
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                className="input"
                onChange={(event: any) => changeHandler(event)}
                value={value}
                required={required}
                disabled={disabled}
            />
        </>
    );
};

export default Input;
