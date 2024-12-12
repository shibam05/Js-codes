let arr = [2, 7, 9, 15, 23, 48];
// console.log(arr[4]);
const arr1 = new Array(7, 18, 52, 64, 100);
console.log(arr1.length);

arr1.pop()
arr1.push(200);
console.log(arr1);
// arr1.unshift(10)     // -> The unshift() method modifies the original array by adding elements to its beginning 
arr1.shift()            // -> The shift() method of removes the first element from an array and returns that removed element.
console.log(arr1);

const joined_arr = arr.join('-');
console.log(joined_arr, "->", typeof joined_arr);

const A = [0, 1, 2, 3, 4, 5, 6];

const newA1 = A.slice(1, 4);
console.log(newA1);   // Output: [1, 2, 3]
console.log(A);     // orignal array remained unchanged

const newA2 = A.splice(1, 4);
console.log(newA2);  // [ 1, 2, 3, 4 ] , splice returns the removed elements
console.log(A);     //  [0, 5, 6] , splice does modify the original array

//+++++++++++++++++++++ PART2 +++++++++++++++++++++

const X = [2, 3, 4, 5, 6];
const Y = [22, 23, 24, 25, 26];

// X.push(Y);
// console.log(X);     // push any type of data

// const Z = X.concat(Y);   // concat returns ew array
// console.log(Z);

const all_elements = [...X, ...Y];   // spread operator
console.log(all_elements);

const mixed_arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
const original_arr = mixed_arr.flat(3);
console.log(original_arr);

console.log(Array.isArray([20, 30, 40]));     // ->   returns boolean
console.log(Array.isArray("shibam"));       //          ,,

console.log(Array.from("Shibam"))
console.log(Array.from({ name: "shibam" }));    // returns []

let a = 80, b = 90, c = 100;
console.log(Array.of(a, b, c));
