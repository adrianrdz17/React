import { getHeroeById, getHeroeByOwner } from "./bases/08-imp-exp";

// const promesa = new Promise( ( resolve, reject) => {

//     setTimeout( () => {
//         // Tarea
//         //Importar getHeroeById 
        
//         const heroe = ( getHeroeById( 3 ) );
//         resolve( heroe );
//     }, 2000);

// });

// // Promesa satisfactoria
// promesa.then( ( heroe ) => {
//     console.log('Heroe', heroe);
// })
// .catch( err => {
//     console.warn( err );
// })


const getHeroeByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject) => {

        setTimeout( () => {
            // Tarea
            //Importar getHeroeById 
            
            const heroe = ( getHeroeById( id ) );

            heroe ? resolve( heroe ) : reject( 'Superheroe no encontrado' );

        }, 2000);
    
    });

}

getHeroeByIdAsync( 3 )
    .then( console.log )
    .catch( console.warn );