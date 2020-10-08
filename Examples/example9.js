var a = 1234; // number
var b = Infinity * 0.10; // number
var c = 5678; // 5678
var d = a < b; //boolean
var e = 1000; // number
var f = 26.218; //26.218
var g = 10; // Error TS2322: Type '10' is not assignable
// to type '26.218'.
console.log("a:" + a);
console.log("b:" + b);
console.log("c:" + c);
console.log("d:" + d);
console.log("e:" + e);
console.log("f:" + f);
console.log("g:" + g);
