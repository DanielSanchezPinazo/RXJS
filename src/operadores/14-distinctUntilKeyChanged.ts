import { from, pipe } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

// "distinctUntilKeyChanged" ignora todas las emisiones cuyo valor del campo
// indicado sea idéntico al emitido inmediatamente antes ( === )

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

from( personajes ).pipe(

    distinctUntilKeyChanged( "nombre" )
).subscribe( console.log );



