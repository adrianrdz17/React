import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './components';

export const MultipleCustomHooks = () => {
    const { increment, decrement, counter, setCounter } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );
    // Si la data tiene un valor, toma el valor en la data en la posicion 0
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {isLoading ? (
                <LoadingQuote />
            ) : (
                <Quote author={author} quote={quote} />
            )}

            {counter > 1 && (
                <button
                    className='btn btn-danger'
                    onClick={() => {
                        decrement();
                    }}
                >
                    Previous
                </button>
            )}

            <button
                className='btn btn-primary'
                disabled={isLoading}
                onClick={() => {
                    increment();
                }}
            >
                Next quote
            </button>

            <input
                type='text'
                onChange={(event) => {
                    setCounter(event.target.value);
                }}
                className='form-control mt-2'
                placeholder='Insert a number'
            />
        </>
    );
};
