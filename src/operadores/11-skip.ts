import { fromEvent, interval } from "rxjs";
import { map, skip, takeUntil, takeWhile, tap } from "rxjs/operators";

// "skip" ignora el número de emisiones que se le indique como argumento

const boton = document.createElement("button");

boton.innerHTML = "Detener Timer";

document.querySelector("body").append( boton );

const counter$ = interval( 1000 );
const clickBtn$ = fromEvent<MouseEvent>( boton, "click" ).pipe(

    tap( () => console.log("tap antes de skip")),
    skip( 1 ), // para que se detenga al segundo click
    tap( () => console.log("tap después de skip"))
);

counter$.pipe(
    
    takeUntil( clickBtn$ )
)
.subscribe({

    next: val => console.log( "next:", val ),
    complete: () => console.log( "complete" )
});