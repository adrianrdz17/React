import { Hijo } from './Hijo';
import { useState, useCallback } from 'react';

export const Padre = () => {
    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    // Realizo la memorizacion de la funcion incrementar. Importante modificar el setValor de esta forma para que cambie el valor de incremento y no solo el valor por defecto del valor.

    const incrementar = useCallback((num) => {
        setValor((oldValue) => oldValue + num);
    }, []);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {numeros.map((n) => (
                <Hijo key={n} numero={n} incrementar={incrementar} />
            ))}
            {/* <Hijo /> */}
        </div>
    );
};
