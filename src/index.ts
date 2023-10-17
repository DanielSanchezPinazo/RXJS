import { catchError, delay, forkJoin, fromEvent, interval, map, of, pipe, subscribeOn, take } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// "forkJoin()" es una función que combina observables y emite un único valor combinando las
//  últimas emisiones de cada observable, y sólo lo hace cuando completan todos

const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "klerith";

forkJoin({

    usuario: ajax.getJSON( `${ GITHUB_API_URL }/${ GITHUB_USER }` ),
    repos: ajax.getJSON( `${ GITHUB_API_URL }/${ GITHUB_USER }/repos` ),
    gists: ajax.getJSON( `${ GITHUB_API_URL }/${ GITHUB_USER }/gists` ),
}).subscribe( console.log );

// realiza las 3 peticiones de forma simultánea pero sólo emite la respuesta
// cuando se completan las 3 y combinándolas

// si uno de los 3 da fallos los otros 2 se realizarían sin problemas pero la respuesta
// sería un error, para prevenirlo se podría hacer lo siguiente

forkJoin({

    usuario: ajax.getJSON( `${ GITHUB_API_URL }/${ GITHUB_USER }` ),
    repos: ajax.getJSON( `${ GITHUB_API_URL }/${ GITHUB_USER }/reposXXXX`).pipe(

        catchError( err => of({}) )
    ),
    gists: ajax.getJSON( `${ GITHUB_API_URL }/${ GITHUB_USER }/gists` ),
}).subscribe( console.log );

