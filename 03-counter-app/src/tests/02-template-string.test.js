import { getSaludo } from "../base/02-template-string";
import "@testing-library/jest-dom";

describe("Pruebas en 02-template-string.js", () => {
    test("getSaludo debe retornar hola {nombre}", () => {
        const nombre = "Gustavo";
        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}`);
    });

    test('getSaludo debe de retornar "Hola Carlos si no hay argumento nombre', () => {
        const saludoSinArgumento = getSaludo();

        expect(saludoSinArgumento).toBe("Hola Carlos");
    });
});
