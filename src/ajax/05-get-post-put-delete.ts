
import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// "get" y "delete" reciben una url y los "headers"

ajax.get( url, {

    token: "123ABC"
}).subscribe( console.log );

ajax.delete( url, {

    token: "123ABC"
}).subscribe( console.log );

// "post" y "put" además reciben en medio el "body"

ajax.post( url, {

    id: 1,
    nombre: "Dani"
}, {

    token: "123ABC"
}).subscribe( console.log );

ajax.put( url,  {

    id: 1,
    nombre: "Dani"
}, {

    token: "123ABC"
}).subscribe( console.log );

// otra forma de manejar estas peticiones es la siguiente, donde para cambiar entre 
// "put", "post", "get" y "delete" sólo habría que cambiar una palabra

ajax({

    //url: url -> esto ya es redundante
    url,
    method: "POST",
    headers: {
// "mi-token" hay que ponerlo entre comillas para que no se piense que es una resta
        "mi-token": "ABC123"
    },
    body: {

        id: 2,
        nombre: "Daniel"
    }
}).subscribe( console.log );



