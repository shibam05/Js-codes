let score = "35abcd";
let scoreNum = Number(score);
console.log(typeof scoreNum);   // After conversion always type is shown as number
console.log(scoreNum);

/*
"35" => 35
"35abc" => NaN
null => 0
undefined => NaN
true => 1, false => 0
*/

let isloggedin = -23.56;
let boolIsLoggedin = Boolean(isloggedin);
console.log(typeof boolIsLoggedin);   // After conversion always type is shown as boolean
console.log(boolIsLoggedin);
/*
"" => false
"any string" => true
0 => false
NaN => false
undefined => false
non-zero int,float numbers => true
*/
