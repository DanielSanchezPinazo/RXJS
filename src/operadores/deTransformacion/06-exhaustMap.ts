import { fromEvent, interval, exhaustMap, switchMap, take } from "rxjs";


const click$ = fromEvent( document, "click" );
const interval$ = interval( 500 ).pipe( take( 3 ));

click$.pipe(

    // switchMap( () => interval$ ),
    exhaustMap( () => interval$ ),
)
.subscribe( console.log );

// el "exhaustMap" es como el concatMap pero no pone en cola los valores emitidos por el
// resto de observables, sino que las ignora hasta que se completa el actual y sólo 
// mostrará los valores del siguiente observable en emitir. Esto es muy útil cuando tenemos 
// un observable que emite muchos valores que no nos hacen falta

