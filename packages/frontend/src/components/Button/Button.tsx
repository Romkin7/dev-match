import React, { FC } from 'react';
import './Button.scss';
import { App } from '../../../../types/';

interface IButtonProps {
    type: App.buttonTypes;
    color: string;
    buttonText: string;
    size: App.supportedSizes;
    clickHandler: (event: any) => void;
}

const Button: FC<IButtonProps> = ({
    type,
    color,
    buttonText,
    size,
    clickHandler,
}) => {
    return (
        <button
            type={type}
            className={'button button_' + color + ' ' + size}
            onClick={(event: any) => clickHandler(event)}
        >
            {buttonText}
        </button>
    );
};

export default Button;
