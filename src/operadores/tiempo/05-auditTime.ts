import { fromEvent, pipe } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

// "auditTime(2000)" devolvería el último valor emitido por el elemento al que observa
// dos segundos despúes de emitir un valor

const click$ = fromEvent<MouseEvent>( document, "click" ); 

click$.pipe(

    map( ( {x, y} ) => ( {x, y} ) ),
    tap( val => console.log( "tap:", val )),
    auditTime( 3000 ),
).subscribe( console.log );
