import { Observable, fromEvent } from "rxjs";
import { debounceTime, map, mergeAll } from "rxjs/operators";

import { ajax } from "rxjs/ajax";

import { GithubUser } from "../../interfaces/githubUser.interface";
import { GithubUsersResp } from "../../interfaces/githubUsers.interface";

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append( textInput, orderList );

//Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {

    console.log( usuarios );
    orderList.innerHTML = "";

    for ( const usuario of usuarios ) {
        
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = usuario.avatar_url;

        const anchor = document.createElement("a");
        anchor.href = usuario.html_url;
        anchor.text = "Ver página";
        anchor.target = "_blank";

        li.append( img );
        li.append( usuario.login + " " );
        li.append( anchor );

        orderList.append( li );
    };
};

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, "keyup" );

input$.pipe(

    debounceTime<KeyboardEvent>( 500 ),
    map<KeyboardEvent, Observable<GithubUsersResp>>( event => {

        const texto: string = event.target["value"];
        return ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`
        );
    }),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>( resp => resp.items )
).subscribe( mostrarUsuarios );


// "mergeAll" se subscribe internamente a varios observables y no se completa 
// hasta que se completan todos. Emite un observable por cada valor que recibe

