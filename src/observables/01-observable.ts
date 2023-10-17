
import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {

    next: value => console.log( "siguiente: [next]:", value ),
    error: error => console.warn("error [obs]:", error),
    complete: () => console.info("Completado [obs]")  
};

// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {
    
    subs.next("Hola");
    subs.next("Mundo");
    subs.next("Hola");
    subs.next("Mundo");
 // subs.next(2);
 // da error porque hemos definido que es un observable por el que fluyen strings

// forzar un error
// const a = undefined;
// a.nombre = "Dani"

    subs.complete();
// ya no se observan las emisiones
    subs.next("Hola");
    subs.next("Mundo");

});

// obs$.subscribe(resp => console.log( resp ));
// lo de arriba es lo mismo que lo de abajo
// obs$.subscribe(console.log);

obs$.subscribe( observer ); // hace lo mismo que el código de abajo

// obs$.subscribe({

//     next: valor => console.log("valor:",valor),
//     error: error => console.warn("error:", error),
//     complete: () => console.log("Completado")   
// });


