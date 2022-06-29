const { renderHook } = require('@testing-library/react');
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks';

describe('Pruebas en el useForm', () => {
    const initialForm = {
        name: 'Fernando',
        email: 'fernando@gmail.com',
    };

    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('Debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';

        // Montar el hook
        const { result } = renderHook(() => useForm());

        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';

        // Montar el hook
        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState).toBe(initialForm);
    });
});
