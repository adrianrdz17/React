import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../../src/03-examples/MultipleCustomHooks';

describe('Pruebas en <MultipleCustomHooks/>', () => {
    test('Debe de mostrar el componente por defecto', () => {
        // Renderizando el componente
        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading'));
        expect(screen.getByText('Breaking Bad Quotes'));

        // Obteniendo un boton mediante nombre
        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        // Verifico que el boton este deshabilitado
        expect(nextButton.disabled).toBeTruthy();

        screen.debug();
    });
});
