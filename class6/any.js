"use strict";
let maxLimit = Number.MAX_SAFE_INTEGER;
console.log(maxLimit);
// any type methods anytype of uses like user inpute, network rsponse,deserialized , json object
// unkown type it check the type and also safety
let num;
num = 5;
num = "hay";
num = true;
if (typeof num === 'number') {
    console.log(num + 5);
}
else if (typeof num === 'boolean') {
    console.log(num);
}
// in function
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}
async function processData() {
    const response = await fetchData();
    if (typeof response === 'object') {
        return true;
    }
}
