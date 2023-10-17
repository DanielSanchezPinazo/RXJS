import { interval, reduce } from "rxjs";
import { tap, take } from "rxjs/operators";

const numbers = [ 1, 2, 3, 4, 5 ];

const totalReducer = (acumulador: number, actual: number) => {

    return acumulador + actual;
};

const total = numbers.reduce( totalReducer, 0 );
console.log( "Total", total );

interval( 500 )
.pipe(
    take( 6 ),
    tap( console.log ),
    reduce( totalReducer )
)
.subscribe({

    next: val => console.log("Val:", val),
    complete: () => console.log("Complete")
});