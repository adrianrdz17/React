import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password, onResetForm } =
        useForm({
            username: '',
            email: '',
            password: '',
        });

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />
            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type='email'
                className='form-control mt-2'
                placeholder='fernando@google.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type='password'
                className='form-control mt-2'
                placeholder='password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className='btn btn-primary mt-2'>
                Borrar
            </button>
        </>
    );
};

export default FormWithCustomHook;
