"use strict";
// specifying return type
function add(a, b) {
    return a + b;
}
// void type
// undefined type
function printR(param) {
    console.log(param);
}
printR(add(2, 45));
// function types
let summation; // will allow any function to be assigned to the variable
let comine; // Distinctive function type
summation = add;
comine = add;
// summation =100 // will throw an error
printR(summation(20, 44));
function compute(a, b, cb) {
    const result = a + b;
    cb(result);
}
compute(210, 330, (result) => {
    console.log(result);
});
