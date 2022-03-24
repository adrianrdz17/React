// Funciones en JS

// function saludar ( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => 'Hola mundo';

console.log( saludar3( 'Goku' ) );
console.log( saludar3( 'Juan' ) );
console.log( saludar4() );

const getUsuario = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

const user = getUsuario();
console.log( user );

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );