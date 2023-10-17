import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

const letras$ = of( "a", "b", "c" );

letras$.pipe(

    mergeMap( (letra) => interval( 1000 ).pipe( 

        map( i => letra + i ),
        take( 3 )        
    ))
).subscribe({

    next: val => console.log( "next:", val ),
    complete: () => console.log( "Completado" )
});

// mergeMap se subscribe internamente a varios observables y no se completa 
// hasta que se completan todos. Emite un observable por cada valor que recibe

const mousedown$ = fromEvent( document, "mousedown" );
const mouseup$ = fromEvent( document, "mouseup" );
const interval$ = interval(); // 1 por defecto

mousedown$.pipe(

    mergeMap( () => interval$.pipe(

        takeUntil( mouseup$ )
    ))
)
.subscribe( console.log );




