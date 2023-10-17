
import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

obs$.subscribe( data => console.log( "getJson:", data ) );
obs2$.subscribe( data => console.log( "ajax:", data ) );

// "getJson" nos da info sobre la "Response", mientras que "ajax"
// nos da info sobre la "Response", la "Request", el evento, el Status Code...




