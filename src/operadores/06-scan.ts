import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numbers = [ 1, 2, 3, 4, 5 ];

const totalAcumulador = (acumulador, actual) => acumulador + actual;

// Reduce

from( numbers ).pipe(

    reduce( totalAcumulador, 0 ),
)
.subscribe( val => console.log( "Reduce:", val ));

// Scan

from( numbers ).pipe(

    scan( totalAcumulador, 0 ),
)
.subscribe( val => console.log( "Scan:", val ));

// Redux

interface User {

    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
};

const user: User[] = [

    {id: "Dani", autenticado: false, token: null},
    {id: "Dani", autenticado: true, token: "ABC"},
    {id: "Dani", autenticado: true, token: "ABC123"},
];

const state$ = from( user ).pipe(

    scan( ( acum, act ) => {

        return { ...acum, ...act }  
    }, { edad: 33 })
);

const id$ = state$.pipe(

    map<User, unknown>( state => state.id )
);

id$.subscribe( console.log );