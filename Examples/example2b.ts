console.log(num1); //Compiler Error: error TS2448: Block-scoped variable 'num' used before its declaration
let num1:number = 10;

console.log(num2); //ok, output: undefined
var num2:number = 10;