import { from, fromEvent, pipe } from "rxjs";
import { sampleTime, map } from "rxjs/operators";

// "sampleTime(3000)" devolvería el último valor emitido por el elemento al que observa
// cada 3 segundos a partir de la suscripción o la emisión anterior

const click$ = fromEvent<MouseEvent>( document, "click" ); 

click$.pipe(

    sampleTime( 2000 ),
    map( ({ x, y }) => ({ x, y }) ),
    // sampleTime( 2000 )
).subscribe( console.log );
