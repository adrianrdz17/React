import { useCounter } from '../hooks/useCounter';

const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(15);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button
                onClick={() => {
                    increment(2);
                }}
                className='btn btn-primary'
            >
                +1
            </button>
            <button onClick={reset} className='btn btn-primary'>
                Reset
            </button>
            <button
                onClick={() => {
                    decrement(2);
                }}
                className='btn btn-primary'
            >
                {' '}
                -1
            </button>
        </>
    );
};

export default CounterWithCustomHook;
