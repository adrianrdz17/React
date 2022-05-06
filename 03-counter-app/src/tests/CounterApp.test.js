import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en el <CounterApp />", () => {

    let wrapper = shallow(<CounterApp />);
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test("Debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe de mostrar el valor por defecto de 10", () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={100} />);
        const counter = Number(wrapper.find("h2").text().trim());

        expect(counter).toBe(value);
    });

    test("Debe de incrementar el contador con el boton +1", () => {
        wrapper.find("button").at(0).simulate("click");

        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("11");
    });

    test('Debe de decrementar el valor del contador con el boton "-1"', () => {
        wrapper.find("button").at(2).simulate("click");

        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("9");
    });

    test('Debe de reiniciar el valor del contador con el boton "Reset"', () => {

        const wrapper = shallow(<CounterApp value={105}/>);
        
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");

        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("105");
    });
});
