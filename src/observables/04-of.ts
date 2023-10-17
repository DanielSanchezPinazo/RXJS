import { of } from "rxjs";

// const obs$ = of<number[]>( 1,2,3,4,5,6 );
// const obs$ = of<number[]>( [1,2,3,4,5,6] );
// const obs$ = of<number[]>( ...[1,2,3,4,5,6],1,2,3 );
const obs$ = of( [1,2], {a:1, b:2}, function(){}, Promise.resolve(true) );

console.log("Inicio del Observable");

obs$.subscribe({

    next: next => console.log( "next:", next ),
    complete: () => console.log("Terminamos la secuencia")       
});

console.log("Fin del Observable, demostrando que un observable puede ser síncrono");