import { fromEvent, map, merge } from 'rxjs';

// "merge()" es una función que combina observables y emite valores según estos los
// vayan lanzando, y se completa cuando se completan todos

const keyup$ = fromEvent( document, "keyup" );
const click$ = fromEvent( document, "click" );

merge( 
    keyup$.pipe(

        map( event => event[ "key" ])
    ), 
    click$.pipe(

        map( event => event.type)
    )
).subscribe( console.log );


