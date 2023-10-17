import { fromEvent } from "rxjs";

// Eventos del DOM

const src1$ = fromEvent<PointerEvent>( document, "click" );
const src2$ = fromEvent<KeyboardEvent>( document, "keyup" );

const observer = {
    
    next: val => console.log("next:", val)   
};

// src1$.subscribe( observer );
// src2$.subscribe( observer );

// src1$.subscribe( ev => {
//     console.log("pos x:", ev.x);
//     console.log("pos y:", ev.y);
// });
//! si desestructuramos lo anterior

src1$.subscribe( ({ x, y }) => {

    console.log( "pos x:", x, "pos y:", y );
});

src2$.subscribe( evento => console.log( evento.key ));
