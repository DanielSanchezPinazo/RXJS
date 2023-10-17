import { fromEvent, of } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

// "first" limita el número de valores que emite un observable a sólo el primero
// y se completa, pero se le puede poner una condición

const click$ = fromEvent<MouseEvent>( document, "click" );

click$.pipe(

    first( event => event.clientY >= 150 )
)
.subscribe({

    next: val => console.log( "next:", val ),
    complete: () => console.log( "complete" )
});

//! Desestructuración

click$.pipe(
    // map( event => ({
    //     clientX: event.clientX, 
    //     clientY: event.clientY }) ) lo de abajo es lo mismo
    map( ({ clientX, clientY }) => ({ clientX, clientY }))
)
.subscribe( console.log );