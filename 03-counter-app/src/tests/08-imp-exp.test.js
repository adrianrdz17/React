import { getHeroeById, getHeroesByOwner } from "../base/08-imp-exp";
import heroes from "../data/heroes";

describe("Pruebas en funciones de 08-imp-exp", () => {
    test("Debe de retornar un heroe por ID", () => {
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find((h) => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test("Debe de retornar undefined si el heroe no existe", () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test("Debe de retornar un arreglo con los heroes de DC", () => {
        const owner = "DC";
        const heroesByOwner = getHeroesByOwner(owner);

        const dcHeroes = heroes.filter((h) => h.owner === owner);

        expect(heroesByOwner).toEqual(dcHeroes);
    });

    test("Debe de retornar un arreglo con los heroes de Marvel", () => {
        const owner = "Marvel";
        const heroesByOwner = getHeroesByOwner(owner);

        const marvelHeroes = heroes.filter((h) => h.owner === owner);

        expect(heroesByOwner).toEqual(marvelHeroes);
    });
});
