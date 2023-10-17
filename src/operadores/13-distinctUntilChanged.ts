import { from, of, pipe } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

// "distinctUntilChanged" ignora todas las emisiones cuyo valor sea idéntico
// al emitido inmediatamente antes ( === ), en las clases primitivas

const numeros$ = of( 1, "1", 1, 3, 3, 2, 2, 4, 4, 5, 3, "1" );

numeros$.pipe(

    distinctUntilChanged()
).subscribe( console.log );

interface Personaje {

    nombre: string;
};

const personajes: Personaje[] = [

    {
        nombre: "Megaman"
    },    
    {
        nombre: "Megaman"
    },    
    {
        nombre: "Zero"
    },    
    {
        nombre: "Dr. Willy"
    },    
    {
        nombre: "X"
    },    
    {
        nombre: "X"
    },    
    {
        nombre: "Zero"
    },
];

//! Los objetos los considera distintos anuque tengan el mismo valor
//! ya que apuntan a un lugar distinto en memoria, así que hay que darle 
//! más información al operador sobre que campo tiene que distinguir

from( personajes ).pipe(

    distinctUntilChanged( ( anterior, actual ) => anterior.nombre === actual.nombre )
).subscribe( console.log );



