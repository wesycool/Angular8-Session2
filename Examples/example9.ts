let a = 1234; // number
var b = Infinity * 0.10;// number
const c = 5678; // 5678
let d = a < b; //boolean
let e: number = 1000; // number
let f: 26.218 = 26.218; //26.218
let g: 26.218 = 10; // Error TS2322: Type '10' is not assignable
                    // to type '26.218'.
		    

console.log("a:"+a);
console.log("b:"+b);
console.log("c:"+c);
console.log("d:"+d);
console.log("e:"+e);
console.log("f:"+f);
console.log("g:"+g);