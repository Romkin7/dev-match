import React from 'react';
import './LoginForm.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';

const LoginForm = () => {
    const clickHandler = (event) => {
        event.preventDefault();
    };
    return (
        <form className="form">
            <Input type="text" name="username" lable="Username" required={true} />
            <Input type="password" name="password" lable="Password" required={true} />
            <Button
                type="submit"
                color="peach"
                size="md"
                buttonText="Login"
                clickHandler={clickHandler}
            />
        </form>
    );
};

export default LoginForm;
