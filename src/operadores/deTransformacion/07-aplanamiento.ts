import { fromEvent, tap, map, mergeMap, catchError, of, switchMap, exhaustMap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const petionHttpLogin = ( userPass ) => ajax.post( 

    "https://reqres.in/api/login?delay=1", userPass
).pipe(

    map( resp => resp.response["token"]),
    catchError( err => of("XXX") )
);

// crear un formulario
const form = document.createElement( "form" );
const inputEmail = document.createElement( "input" );
const inputPass = document.createElement( "input" );
const submitBtn = document.createElement( "button" );

// Configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append( inputEmail, inputPass, submitBtn );
document.querySelector( "body" ).append( form );

// Streams
const submitForm$ = fromEvent( form, "submit" )
    .pipe(

        tap( event => event.preventDefault()),
        map( event => ({

            email: event.target[0].value,
            password: event.target[1].value
        })),
        switchMap( petionHttpLogin )
        // exhaustMap( petionHttpLogin )
        // mergeMap( petionHttpLogin )// esto es lo mismo que - mergeMap( userPass => petionHttpLogin(userPass))
    );

submitForm$.subscribe( token => {

    console.log( token )
});

