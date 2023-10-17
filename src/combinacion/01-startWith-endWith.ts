import { endWith, of, pipe, startWith } from 'rxjs';


const numero$ = of( 1, 2, 3 ).pipe(

    endWith( 4 ),
    startWith( 0 ),
);

// Emiten el valor que le pasemos (strings, números, objetos...) respectivamente
// antes y después de emitir sus valores

numero$.subscribe( console.log );