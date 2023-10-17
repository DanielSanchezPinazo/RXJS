import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

// "takeWhile" el observador se completa cuando se cumple la condición, y lleva
// un segundo parametro (false por defecto) que indica si devuelve o no el valor
// que incumple la condición y lo completa

const click$ = fromEvent<MouseEvent>( document, "click" );

click$.pipe(
    
    map( ({ x, y }) => ({ y, x }) ),
    takeWhile( ({ x, y }) => y >= 150 && x > 200, true )
    // takeWhile( ({ y }) => y <= 150, true )
)
.subscribe({

    next: val => console.log( "next:", val ),
    complete: () => console.log( "complete" )
});