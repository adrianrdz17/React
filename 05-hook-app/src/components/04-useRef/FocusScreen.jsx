import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

const FocusScreen = () => {
    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />
            <button
                onClick={handleClick}
                className="btn btn-outline-primary mt-5"
            >
                Focus
            </button>
        </div>
    );
};

export default FocusScreen;