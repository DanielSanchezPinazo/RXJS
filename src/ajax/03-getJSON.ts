import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
const obs$ = ajax.getJSON( url, {

    "Content-Type": "application/json",
    "mi-token": "ABC123"
});// como parámetro se le debe pasar un "endpoint", pero tb pueden pasársele "headers" en forma de objeto

obs$.subscribe( data => console.log( "data:", {data} ) );
obs$.subscribe( data => console.log( "data:", {data} ) );

