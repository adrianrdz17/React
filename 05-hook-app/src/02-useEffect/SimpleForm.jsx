import React, { useEffect, useState } from 'react';
import { Message } from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'fernando',
        email: 'fernando@google.com',
    });

    const { username, email } = formState;

    const onInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        // console.log('useEffect called');
    }, []);

    useEffect(() => {
        // console.log('formState change');
    }, [formState]);

    useEffect(() => {
        // console.log('email change');
    }, [email]);

    return (
        <>
            <h1>Formulario simple</h1>
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

            {username === 'fernando' && <Message />}
        </>
    );
};

export default SimpleForm;
