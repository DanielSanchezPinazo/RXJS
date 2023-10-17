import { from, fromEvent, range } from 'rxjs';
import { filter, map, tap } from "rxjs/operators";

const numeros$ =  range(1, 5);

numeros$.pipe( 

    tap( x => {
        console.log( "Antes:", x );
        return 100; //! Esto no se ejecutara porque tap no modifica el flujo de información
    }),
    map( val => val * 10 ),
    tap({

        next: valor => console.log("Después:", valor),
        complete: () => console.log("Seterminó todo")
    })
).subscribe( val => console.log("Subs: ", val));