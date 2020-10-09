3 + []; //Error: TS2365: Operator '+' cannot be applied to types '3' and 'never[]'.
var obj = {};
obj.foo; // Error TS2339: Property 'foo' does not exist on type '{}'
function a(b) {
    return b / 2;
}
a("z"); // Error TS2345: Argument of type '"z"' is not assignable to 
// parameter of type 'number'
