import React, { useState } from 'react';
import './LoginForm.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';

const LoginForm = () => {
    const [formState, updateFormState] = useState({});
    const changeHandler = (event) => {
        updateFormState({[event.target.name]: event.target.value});
    };
    const submitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <form className="form">
            <Input type="text" name="username" lable="Username" required={true} value={formState.username || ''} changeHandler={changeHandler} />
            <Input type="password" name="password" lable="Password" required={true} value={formState.password || ''} changeHandler={changeHandler} />
            <Button
                type="submit"
                color="peach"
                size="md"
                buttonText="Login"
                clickHandler={submitHandler}
            />
        </form>
    );
};

export default LoginForm;
