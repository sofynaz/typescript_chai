"use strict";
// function practice
const isEven = (a) => {
    if (a % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
const result = isEven(2);
console.log(result);
// practice question 
const isDivisible = (a, b) => {
    return a % 4 === 0 && b % 8 === 0;
};
const resultfunc = isDivisible(12, 16);
console.log(resultfunc);
// practice BigInt
// let maxNumber = Number.MAX_SAFE_INTEGER;

let maxNumber = 9007199254740992n;
let anotherBig = 9007199254740993n;
let totalSum = maxNumber + anotherBig;
console.log(totalSum);
