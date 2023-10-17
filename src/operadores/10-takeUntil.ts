import { fromEvent, interval } from "rxjs";
import { map, takeUntil, takeWhile } from "rxjs/operators";

// "takeUntil" el observador se completa cuando otro observable emite un valor

const boton = document.createElement("button");

boton.innerHTML = "Detener Timer";

document.querySelector("body").append( boton );

const counter$ = interval( 1000 );
const clickBtn$ = fromEvent<MouseEvent>( boton, "click" );

counter$.pipe(
    
    takeUntil( clickBtn$ )
)
.subscribe({

    next: val => console.log( "next:", val ),
    complete: () => console.log( "complete" )
});