var num = 1; //OK
var Num = 2; //OK
var NUM = 3; //OK
var NuM = 4; //OK
var num = 5; //Compiler Error: Cannot redeclared block-scoped variable 'num'
var Num = 6; //Compiler Error: Cannot redeclared block-scoped variable 'Num'
var NUM = 7; //Compiler Error: Cannot redeclared block-scoped variable 'NUM'
var NuM = 8; //Compiler Error: Cannot redeclared block-scoped variable 'NuM'
