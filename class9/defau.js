"use strict";
// by default takae parameter is:=1 without taken any arguments
const greetDefault = (name, id = 1) => {
    console.log('greet');
};
console.log(greetDefault('mama'));
// by optional paramter
const greetOptional = (name, id) => {
    return `you have a challange ${name} is ${id}`;
};
console.log(greetOptional('mama'));
