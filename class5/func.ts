// function practice
const isEven = (a:number):boolean =>{
if(a%2 === 0){
    return true;
}else{
    return false;
}
}
const result:boolean = isEven(2);
console.log(result);

// practice question 

const isDivisible = (a:number,b:number): boolean =>{
return a%4 === 0 && b%8 === 0;
}

const resultfunc:boolean = isDivisible(12,16);
console.log(resultfunc);

// practice BigInt

// let maxNumber = Number.MAX_SAFE_INTEGER;
let maxNumber:bigint = 9007199254740992n;
let anotherBig:bigint = 9007199254740993n;
let totalSum:bigint = maxNumber + anotherBig
console.log(totalSum)


