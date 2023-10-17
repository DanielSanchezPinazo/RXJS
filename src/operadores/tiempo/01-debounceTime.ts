import { from, fromEvent, pipe } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

// "debounceTime(3000)" devolvería cada 3 segundos el último valor emitido por el 
// elemento al que observa, ignorando los emitidos entre esta devolución y la anterior

const click$ = fromEvent<MouseEvent>( document, "click" ); 

click$.pipe(

    debounceTime( 3000 ) //! muestra la info del evento click 3 segundos después de pulsar
).subscribe( console.log );

const input = document.createElement( "input" );
document.querySelector( "body" ).append( input );

const input$ = fromEvent( input, "keyup" );

input$.pipe(

    debounceTime( 1000 ), //! sólo muestra el valor de los que escribimos un segundo después de terminar de escribir
    map( event =>  event.target["value"]),// mostramos sólo el valor del input
    distinctUntilChanged()// para que no muestre el valor anterior si se repite, útil para no repetir peticiones al backend
).subscribe( console.log );