import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import procesoPesado from '../helpers/procesoPesado';

const MemoHook = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h2>MemoHook</h2>
            <h3>
                Counter: <small>{counter}</small>
            </h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemoHook;
