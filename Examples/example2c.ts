let num:number = 1; //OK
let Num:number = 2; //OK
let NUM:number = 3; //OK
let NuM:number = 4; //OK

let num:number = 5; //Compiler Error: Cannot redeclared block-scoped variable 'num'
let Num:number = 6; //Compiler Error: Cannot redeclared block-scoped variable 'Num'
let NUM:number = 7; //Compiler Error: Cannot redeclared block-scoped variable 'NUM'
let NuM:number = 8; //Compiler Error: Cannot redeclared block-scoped variable 'NuM'