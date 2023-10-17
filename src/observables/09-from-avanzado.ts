import { of, from } from "rxjs";

//? of: toma argumentos y genera un observable que puede ser una secuencia
//? from: genera un observable de array, promise, iterable u observable

const observer = {

    next: val => console.log("next:", val),
    complete: () => console.log("Completado")  
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from("Dani");

 function* miGenerador() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

// for (const id of miIterable) {
    
//     console.log( id );
// };

from( miIterable ).subscribe( observer );

const source$ = from( fetch("https://api.github.com/users/klerith"));

// source$.subscribe( observer );

// source$.subscribe( async(resp) => {

//     console.log( resp );
//     const dataResp = await resp.json();
//     console.log( dataResp );  
// });



