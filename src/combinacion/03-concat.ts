import { concat, interval, of, pipe, startWith, take } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// "concat()" es una función que encadena observables pero no empieza a emitir
// el valor de ninguno hasta que no se completa el anterior. y se completa cuando 
// se completan todos

const interval$ = interval( 1000 );

concat(

    interval$.pipe( take( 3 )),
    interval$.pipe( take( 2 )),
    [ 1, 2, 3, 4 ],
    of( 1 )
).subscribe( console.log );
