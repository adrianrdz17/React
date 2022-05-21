import React from 'react';

const ShowIncrement = React.memo(({ increment }) => {
    console.log('Me volvi a generar');

    return (
        <div>
            <button
                className="btn"
                onClick={() => {
                    increment(5);
                }}
            >
                Incrementar
            </button>
        </div>
    );
});

export default ShowIncrement;
