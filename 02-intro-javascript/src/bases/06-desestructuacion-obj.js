// Desestructuracion de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
};

const { nombre, edad, clave } = persona

// console.log( persona.nombre );
// console.log( persona.edad );
// console.log( persona.clave );

const usaContexto = ( ({ nombre, edad, rango = 'Capitan' }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 142345234,
            lng: 2345252,
        }
    }
})

const { nombreClave, anios, latlng:{ lat, lng } } = usaContexto( persona );

console.log( nombreClave, anios );
console.log( lat, lng );
