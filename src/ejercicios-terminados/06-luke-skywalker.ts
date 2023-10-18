import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';
import { zip, of } from 'rxjs';

/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   Luke Skywalker, llamando el endpoint:   /people/1/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar el planeta de nacimiento
 *  (homeworld), que es la URL a la que hay que realizar la 
 *  segunda llamada, la cual debería de traer información 
 *  sobre su planeta natal (homeworld)
 */

// Respuesta esperada:
// Información sobre los humanos en el universo de Star Wars
// Ejemplo de la data esperada
/*
 { name: "Tatooine", "rotation_period": "23", "orbital_period": "304", "diameter": "10465", "climate": "arid", …}
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    personaje: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
    planeta:  { name: "Tatooine", "rotation_period": "23", "orbital_period": "304", "diameter": "10465", "climate": "arid", …}
*/


(() =>{

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================

    // Realizar el llamado al URL para obtener a Luke Skywalker
    getRequest(`${ SW_API }/people/1/`).pipe(
        //! primera  y segunda respuesta
        // switchMap( resp => getRequest( resp["homeworld"]))
        switchMap( resp => zip( of(resp), getRequest( resp["homeworld"]))),
        map( ([ personaje, planeta ]) => ({ personaje, planeta}) )
     

    // NO TOCAR el subscribe ni modificarlo ==
    ).subscribe( console.log );           // ==
    // =======================================   

})();

		
