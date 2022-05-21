import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

// ? useEffect nos permite ejecutar un efecto secundario mientras la aplicacion se ren
const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambios');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
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
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    );
};

export default FormWithCustomHook;
