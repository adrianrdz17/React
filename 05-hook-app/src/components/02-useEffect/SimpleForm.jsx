import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

// ? useEffect nos permite ejecutar un efecto secundario mientras la aplicacion se ren
const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect(() => {
        // ? Restringir ef
    });

    useEffect(() => {
        console.log('formState cambio!!');
        // ? Restringir ef
    }, [formState]);

    // Efecto pendiente del email
    useEffect(() => {
        // Este efecto solo se ejecutara cuando cambie el email
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {name === '123' && <Message />}
        </>
    );
};

export default SimpleForm;
