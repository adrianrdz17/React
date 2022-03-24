const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55134314,
        lat: 14.2342,
        lng: 34.1324,
    }
};

// console.table( persona );
// console.log( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona2 );
console.log( persona );

