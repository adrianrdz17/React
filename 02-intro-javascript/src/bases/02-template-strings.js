const nombre = 'Gustavo';
const apellido = 'Rodriguez';

const nombreCompleto = nombre + ' ' + apellido;
console.log( nombreCompleto );

console.log(`Su nombre completo es: ${nombre} ${apellido}`)

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`)