import { fromEvent, pipe } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

const url = "https://api.github.com/useXXrs?per_page=5";

const manejaErrores = ( respuesta: Response ) => {

    if( !respuesta.ok ) {

        throw new Error( respuesta.statusText );// Para que se dispare en "catct" hay que poner un "trhow" en las promesas
    };

    return respuesta;
};

const fetchPromise = fetch( url );

// fetchPromise
//     .then( resp => resp.json() ) // esto produce una Promise tb, así que hay que hacer otro "then"
//     .then( console.log )
//     .catch( err => console.warn( "Error en usuarios", err ) );

fetchPromise
    .then( manejaErrores )
    .then( resp => resp.json() ) // esto produce una Promise tb, así que hay que hacer otro "then"
    .then( console.log )
    .catch( err => console.warn( "Error en usuarios", err ) );



