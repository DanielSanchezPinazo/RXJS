import { range, fromEvent, Observable } from 'rxjs';
import { map, mapTo, pluck } from "rxjs/operators";

// range( 1, 5 )
//     .pipe( // entra un número y sale un string
//         map<number, string>( resp => (resp * 10).toString() ) 
//     )
//     .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, "keyup" );

keyup$.pipe(

    map( event => event.code )
)
.subscribe( val => console.log("map:", val));

//!

const keyupPluck$ = keyup$.pipe(

    pluck( "target", "baseURI" )
);

keyupPluck$.subscribe( val => console.log("pluck:", val));

//! Deprecado, se sustituye con map

const keyupMap$ = keyup$.pipe(

    map( resp  => resp.target["baseURI"])
);

keyupMap$.subscribe( val => console.log("map:", val));

//!

const keyupMapTo$ = keyup$.pipe(

    mapTo( "Tecla presionada" )
);

keyupMapTo$.subscribe( val => console.log("mapTo:", val) );

//! Deprecado, se sustituye con map()

const keyupMap2$ = keyup$.pipe(

    map( () =>  "Tecla presionada" )
);

keyupMap2$.subscribe( val => console.log("map:", val) );