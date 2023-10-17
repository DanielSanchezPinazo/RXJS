import { of } from "rxjs";
import {AjaxError, ajax } from "rxjs/ajax";
import { catchError, map} from "rxjs/operators";

const url = "https://api.github.com/users?per_page=5";

const atrapaError = (err: AjaxError) => {
    
    console.warn( "Error en:", err );
    return of( [] );
}

// const fetchPromise = fetch( url );

// fetchPromise
//     .then( manejaErrores )
//     .then( resp => resp.json() ) // esto produce una Promise tb, así que hay que hacer otro "then"
//     .then( console.log )
//     .catch( err => console.warn( "Error en usuarios", err ) );

ajax( url )
    .pipe(

        map( resp => resp.response ),
        catchError( atrapaError )
    ).subscribe({

        next: users => console.log( "Usuarios:", users ),
        error: err => console.warn( "error:", err ),
        complete: () => console.log( "Completado" )
    } );

// Si la url falla, la función "atrapaError()" del "catchError" manejará el error y 
// devolverá un objeto vacío, con lo cual se ejecutará el "next" y nunca se ejecutará 
// el error del "subscribe"
