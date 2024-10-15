"use strict"

const currentDate = new Date();
console.log(currentDate);

const username = "sbiswas";
let age = 20;
let email = "sbiswas2@gmail.com";
/*
var is not recommended for use in modern JavaScript development
*/
let password = "jsxnodebun";
let city;   // undefined
console.table([username, email, password, city]);

let bnum = 7312945684316789213214554715000n;
console.log(typeof bnum)    // bigint

const data = [
    { Value: null, Type: typeof null },
    { Value: undefined, Type: typeof undefined },
    { Value: NaN, Type: typeof NaN },
];

console.table(data);