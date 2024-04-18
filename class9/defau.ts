// by default takae parameter is:=1 without taken any arguments
const greetDefault = (name:string , id:number=1)=>{
    console.log('greet');
    
}
console.log(greetDefault('mama'));

// by optional paramter
const greetOptional = (name:string , id?:number):string=>{
    return `you have a challange ${name} is ${id}`
    
}
console.log(greetOptional('mama'));