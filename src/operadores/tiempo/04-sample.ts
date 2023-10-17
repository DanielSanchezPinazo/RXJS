import { fromEvent, interval, pipe } from "rxjs";
import { sample, map } from "rxjs/operators";

// "sample(observable$)" devolvería el último valor emitido por el elemento al que observa
// cuando emita un valor el observable entre paréntesis

const interval$ = interval( 500 );
// const interval$ = interval( 5000 );
const click$ = fromEvent<MouseEvent>( document, "click" ); 

interval$.pipe(

    sample( click$ ),
).subscribe( console.log );
