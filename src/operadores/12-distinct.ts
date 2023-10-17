import { from, of, pipe } from "rxjs";
import { distinct } from "rxjs/operators";

// "distinct" usa la comparación === , en las clases primitivas, por lo que 
// ignora todas las emisiones con el mismo valor de una que ya se haya emitido

const numeros$ = of( 1, "1", 1, 3, 3, 2, 2, 4, 4, 5, 3, "1" );

numeros$.pipe(

    distinct()
).subscribe( console.log );

interface Personaje {

    nombre: string;
};

const personajes: Personaje[] = [

    {
        nombre: "Megaman"
    },    
    {
        nombre: "X"
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
        nombre: "Megaman"
    },    
    {
        nombre: "Zero"
    },
];

//! Los objetos los considera distintos anuque tengan el mismo valor
//! ya que apuntan a un lugar distinto en memoria, así que hay que darle 
//! más información al operador sobre que campo tiene que distinguir

from( personajes ).pipe(

    distinct( person => person.nombre )
).subscribe( console.log );



