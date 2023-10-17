import { fromEvent, interval, concatMap, switchMap, take } from "rxjs";


const click$ = fromEvent( document, "click" );
const interval$ = interval( 500 ).pipe( take( 3 ));

click$.pipe(

    // switchMap( () => interval$ ),
    concatMap( () => interval$ ),
)
.subscribe( console.log );

// el "concatMap" mantiene todas las suscripciones abiertas pero no emite los
// valores de una suscripción hasta que no se completa la anterior. Se van 
// poniendo en una cola para emitirlos