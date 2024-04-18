// function innovocation
function greet(name:string,id:number){
    console.log(`welcome, ${name} and your Id  is ${id}`);
    
}

greet("shital",1)

// call the type of function without return func takes void by default
function greetVoid(name:string,id:number):void{
    console.log(`welcome, ${name} and your Id  is ${id}`);
    
}

greetVoid("shital",1)

// return case  in return case by default take own basis type
const greetReturn =(name:string,id:number):string =>{
    return `welcome, ${name} and your Id  is ${id}`;
    
}

greetReturn("shital",1)

// palindrome function

const isPalindrome = (plain:string):boolean=>{
    let myPalin = plain.split('').reverse().join('');
return myPalin === plain;
}

isPalindrome('12321');


// Home work Like
// let arrayAvg = [1, 2, 3, 4, 5];

// const calculateAvg = (arr:number):number => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calculateAvg(arrayAvg)); // Output: 3

