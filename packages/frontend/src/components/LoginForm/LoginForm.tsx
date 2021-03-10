import React, { FormEvent, useState, FC } from 'react';
import './LoginForm.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';

const LoginForm: FC = () => {
    const [formState, updateFormState] = useState({
        username: '',
        password: '',
    });
    const changeHandler = (event: any) => {
        updateFormState({ [event.target.name]: event.target.value } as any);
    };
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
    };
    return (
        <form className="form">
            <Input
                type="text"
                name="username"
                label="Username"
                disabled={false}
                required={true}
                value={formState.username}
                changeHandler={changeHandler}
            />
            <Input
                type="password"
                name="password"
                label="Password"
                disabled={false}
                required={true}
                value={formState.password}
                changeHandler={changeHandler}
            />
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
