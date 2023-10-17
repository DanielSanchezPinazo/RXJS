import { fromEvent, interval, mergeMap, switchMap, take } from "rxjs";


const click$ = fromEvent( document, "click" );
const interval$ = interval( 1000 );

click$.pipe(

    switchMap( () => interval$ ),
    // mergeMap( () => interval$ ),
    take( 10 )
)
.subscribe( console.log );

// el "mergeMap" mantiene todas las suscripciones abiertas mientras que el
// "switchMap" sólo mantiene una cerrando las anteriores