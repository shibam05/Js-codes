// Primitive -> stack memory
// String, Number, Boolean, null, undefined, Symbol, BigInt

/* Returntypes

Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint
*/

const game = new String("Max payne");
console.log(typeof game); // object
// console.log(game.__proto__);
console.log(game.indexOf('x'));
console.log(game.trim())
const newgame = game.slice(0, 5);
console.log(newgame);

const tempstr = "      what the hell   ";
console.log(tempstr.trim())


// Non-primitive (reference) -> Heap memory
// Array, Object, Function

/* Returntypes

Arrays  =>  object
Function  =>  function
Object  =>  object
*/

let user1 = {
    email: "sb@gmail.com",
    id: 1289
}
console.log(typeof user1); // object

let user2 = user1;
user2.id = 7890
console.log(user1.id);