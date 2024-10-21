let x = 100 / "Apple";
console.log(isNaN(x));

// Infinity is a number: typeof Infinity returns number.
let y = -2 / 0;
console.log(y); // returns -Infinity

const score = 450
console.log(score);

const balance = new Number(100.975)
console.log(balance);
console.log(`The range of Number in JS is from ${Number.MIN_SAFE_INTEGER} to ${Number.MAX_SAFE_INTEGER}`);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const totalBill = 123.8966
console.log(totalBill.toPrecision(4));

const hundreads = 1077448
// console.log(hundreads.toLocaleString());
console.log(hundreads.toLocaleString('en-IN'));


/*


███╗░░░███╗░█████╗░████████╗██╗░░██╗
████╗░████║██╔══██╗╚══██╔══╝██║░░██║
██╔████╔██║███████║░░░██║░░░███████║
██║╚██╔╝██║██╔══██║░░░██║░░░██╔══██║
██║░╚═╝░██║██║░░██║░░░██║░░░██║░░██║
╚═╝░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝


*/
// console.log(Math);
const s = Math.sqrt(3/4)
console.log(s);


const mathConstants = [
    { constant: "Math.E", value: Math.E, description: "Euler's number" },
    { constant: "Math.PI", value: Math.PI, description: "PI (ratio of a circle's circumference to its diameter)" },
    { constant: "Math.SQRT2", value: Math.SQRT2, description: "Square root of 2" },
    { constant: "Math.SQRT1_2", value: Math.SQRT1_2, description: "Square root of 1/2" },
    { constant: "Math.LN2", value: Math.LN2, description: "Natural logarithm of 2" },
    { constant: "Math.LN10", value: Math.LN10, description: "Natural logarithm of 10" },
    { constant: "Math.LOG2E", value: Math.LOG2E, description: "Base 2 logarithm of E" },
    { constant: "Math.LOG10E", value: Math.LOG10E, description: "Base 10 logarithm of E" }
];

console.table(mathConstants);


console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // Upper int value
console.log(Math.floor(4.7)); // Lower int value


console.log(Math.random());  // Returns a random number
console.log(Math.random() * 10 + 1); // Returns a random number from 1 to 9 

const min = 0, max = 20;
console.log(Math.floor((Math.random() * (max - min + 1)) + min));

