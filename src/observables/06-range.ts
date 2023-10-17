import { asyncScheduler, observeOn, of, range } from "rxjs";

// const src$ = of(1,2,3,4,5,);
//! parametros: range( comienzo(0 por defecto), número de emisiones)
// const src$ = range(-5, 10); 
// const src$ = range(1,5,asyncScheduler); deprecated
const src$ = range(1,5).pipe( observeOn(asyncScheduler) ); 

console.log("inicio");
src$.subscribe( console.log );
console.log("Fin");
