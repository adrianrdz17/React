// import { heroes } from './data/heroes';
import heroes, { owners } from "../data/heroes";

const mio = 4;
export const getHeroeById = ( id ) => {
    return heroes.find( heroe => heroe.id === id );
}

export const getHeroeByOwner = ( owner ) => {
    return heroes.filter( heroe => heroe.owner === owner); 
}

console.log(getHeroeById( mio ));
console.log( getHeroeByOwner( 'Marvel' ));