import { combineLatest, fromEvent, map } from 'rxjs';

// "combineLatest()" es una función que combina observables y emite cada valor combinando las
//  últimas emisiones de cada observable, y se completa cuando se completan todos

const keyup$ = fromEvent( document, "keyup" );
const click$ = fromEvent( document, "click" );

// se le debe pasar un array o un objeto

// combineLatest( [
//     keyup$.pipe(

//         map( event => event[ "key" ])
//     ), 
//     click$.pipe(

//         map( event => event[ "x" ])
//     )
// ] ).subscribe( console.log );

const input1 = document.createElement( "input" );
const input2 = document.createElement( "input" );

input1.placeholder = "email@mail.com";
input2.placeholder = "**************";
input2.type = "password";

document.querySelector( "body" ).append( input1, input2 );

// Helper

const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>( elem, "keyup" ).pipe( 

        map<KeyboardEvent, string>( event => event.target["value"] )
    );

combineLatest([

    getInputStream( input1 ),
    getInputStream( input2 ),
]).subscribe( console.log );




