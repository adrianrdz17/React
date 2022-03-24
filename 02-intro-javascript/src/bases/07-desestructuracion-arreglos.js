
const personajes = [ 'Goku', 'Vegeta', 'Trunks' ];

const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () => {
    return ['Abc,', 123];
}

// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara serNombre

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

const usarEstado = ( valor ) => {
    return [ valor, () => { console.log('hola mundo') }];
}

const [ nombre, setNombre ] = usarEstado( 'Zeus' );
console.log( nombre );
setNombre();