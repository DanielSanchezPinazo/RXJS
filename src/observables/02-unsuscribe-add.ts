
import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {

    next: value => console.log( "next:", value ),
    error: error => console.warn("error:", error),
    complete: () => console.info("Completado")  
};

const intervalo$ = new Observable<number>( subscriber => {

    //TODO: crear un contador 1,2,3,4,...
    let counter = 0

    //TODO: cada segundo
    const interval = setInterval( () => {
        
        counter++;
        subscriber.next( counter );
    }, 1000);

    setTimeout(() => {

        subscriber.complete();
    }, 2500);

    return () => {

        clearInterval( interval );
        console.log("Intérvalo destruido");   
    }
});

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

// el metodo add puede encadenar variable o funciones, en este caso suscripciones

subs1.add( subs2 );
subs2.add( subs3 );

setTimeout( () => {

    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log("Completado Timeout");
}, 6000);