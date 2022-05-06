import React from "react";
import { shallow } from 'enzyme';           // Similar al render, pero con mayores opciones

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en el componente <PrimeraApp />", () => {
    // test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
    //     // const saludo = 'Hola, soy Goku';

    //     // const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     // expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, soy Goku'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
            />
        )

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subTitulo);
    })
});
