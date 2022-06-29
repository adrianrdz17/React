import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {
    test('Debe de retornar los valores por defecto', () => {
        // Obtengo el resultado de la renderizacion del hook
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);

        // Se evalua que el tipo de valor evaluado sea una funcion
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe de generar el counter con el valor de 100', () => {
        const initialValue = 100;

        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment } = result.current;

        act(() => {
            increment(2);
        });

        // Se obtiene el valor actual del counter.
        expect(result.current.counter).toBe(12);
    });

    test('Debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement } = result.current;

        act(() => {
            decrement(2);
        });

        // Se obtiene el valor actual del counter.
        expect(result.current.counter).toBe(8);
    });

    test('Debe de reiniciar el contador', () => {
        const initialValue = 100;

        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, reset, increment } = result.current;

        act(() => {
            increment(3);
            increment(3);
            increment(3);
            reset();
        });

        // Se obtiene el valor actual del counter.
        expect(result.current.counter).toBe(counter);
    });
});
