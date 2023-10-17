import { asyncScheduler, from, fromEvent, pipe } from "rxjs";
import { throttleTime, map } from "rxjs/operators";

// "throttleTime(3000)" devolvería el valor emitido por el elemento al que observa
// cada 3 segundos ignorando los emitidos entre esta devolución y la anterior

const click$ = fromEvent<MouseEvent>( document, "click" ); 

click$.pipe(

    throttleTime( 3000 ) //! muestra la info al instante y no vuelve a hacerlo hasta 3 segundos después
).subscribe( console.log );

const input = document.createElement( "input" );
document.querySelector( "body" ).append( input );

const input$ = fromEvent( input, "keyup" );

input$.pipe(

    throttleTime( 1000, asyncScheduler, {
        leading: true, // primer valor (true por defecto)
        trailing: true // último valor
    } ), //! sólo muestra el primer y último valor emitido dentro del tiempo marcado
    map( event =>  event.target["value"]),// mostramos sólo el valor del input
).subscribe( console.log );