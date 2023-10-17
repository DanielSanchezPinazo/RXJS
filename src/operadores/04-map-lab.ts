import { fromEvent } from 'rxjs';
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt ultricies risus, eget imperdiet neque ornare non. Curabitur sodales consequat sodales. Pellentesque et nulla a nunc iaculis convallis sit amet ac mi. Aliquam at diam molestie, tincidunt sapien eu, eleifend lectus. Quisque bibendum aliquam ligula in gravida. Cras sollicitudin dignissim imperdiet. Suspendisse ultricies maximus risus nec tempus. Nam viverra vestibulum feugiat. Nulla at orci nunc. Nunc sapien orci, elementum nec turpis eget, tincidunt ultrices sapien. Mauris volutpat orci augue, in commodo velit convallis eu. Nunc nec condimentum lectus, id semper massa. Maecenas sollicitudin mi et quam rhoncus imperdiet eget in lorem.
<br/><br/>
Nulla congue venenatis ligula, ac consequat sapien laoreet et. Donec laoreet erat id lectus luctus, a ultricies nunc maximus. Donec id nisi facilisis, ullamcorper neque sed, pharetra diam. Vestibulum euismod orci ex, sit amet luctus justo ullamcorper a. Aliquam ac nisi quis elit accumsan dictum quis ullamcorper magna. Curabitur nibh leo, blandit ut laoreet vitae, dapibus auctor mi. Vivamus laoreet, dolor id semper commodo, tellus ante porttitor purus, eu bibendum ligula augue id nisi. Integer eros dolor, ultricies vitae ultrices nec, condimentum id urna.
<br/><br/>
Curabitur gravida massa tellus, vel finibus augue scelerisque ut. Duis eget massa a magna faucibus lacinia. Nulla placerat viverra erat molestie dictum. Praesent convallis volutpat feugiat. Fusce aliquet at est vel elementum. Aliquam aliquam congue massa nec suscipit. Suspendisse pellentesque felis quis mi aliquam facilisis. Morbi mollis, metus vel iaculis vulputate, tellus augue faucibus lacus, sed lobortis felis orci laoreet nisl. Etiam interdum vitae urna eu condimentum. Integer feugiat tellus consectetur justo posuere congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc rhoncus dictum dui, vel dictum purus pulvinar at. Etiam ac nisl vel mauris cursus posuere.
<br/><br/>
Pellentesque dictum egestas velit, sit amet aliquam ligula sodales at. Ut ultrices urna ac ligula accumsan placerat. Suspendisse vel laoreet magna. Suspendisse suscipit viverra tellus eget lacinia. Phasellus eget finibus dolor. Vestibulum vitae tempor urna, ac volutpat massa. Mauris quis convallis est. Integer vestibulum maximus purus non rhoncus. Duis nec ipsum sit amet nisi posuere elementum. Curabitur non tortor nunc. Proin lectus sem, volutpat ut egestas bibendum, tincidunt bibendum sem. Aenean mattis enim ac congue viverra. Phasellus hendrerit feugiat pulvinar. Maecenas dui risus, euismod vel ultricies a, mattis ut nibh.
<br/><br/>
In nec ante vitae lectus sollicitudin dictum. Nam quam ligula, rutrum at consectetur ac, efficitur nec risus. Duis iaculis id ante non posuere. Curabitur massa sapien, posuere sit amet eros eget, facilisis pulvinar nulla. Cras faucibus erat a ante scelerisque, at accumsan nunc condimentum. Nam rhoncus urna id ligula condimentum, non mattis leo vulputate. Sed accumsan scelerisque fringilla. Maecenas dui mi, consectetur a ullamcorper vel, imperdiet non ante. Sed pretium urna ante. Nam dignissim, libero in mattis sodales, sem elit cursus libero, sit amet mollis urna diam ac sapien. Sed rutrum nunc a nulla placerat, nec imperdiet velit convallis. Donec quis laoreet tortor, vitae pretium urna.`;

const body = document.querySelector("body");
body.append( texto );

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append( progressBar );

//todo: función que hace el cálculo

const calcularPorcentajeScroll = ( event ) => {

    const {
        clientHeight,
        scrollHeight,
        scrollTop
    } = event.target.documentElement;

    console.log( {clientHeight, scrollHeight, scrollTop} );

    return ( scrollTop / ( scrollHeight - clientHeight )) * 100;
    
};

// Streams
const scroll$ = fromEvent( document, "scroll" );

// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(

    // map( event => calcularPorcentajeScroll( event ))
    // se puede resumir en:
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;
});