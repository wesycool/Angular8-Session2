function add(a, b) {
    return a + b;
}
function greet(name) {
    return "hello " + name;
}
add(1); //Error S2554: Expected 2 arguments, but got 1
greet(1, 'a'); // Error TS2345: Argument of type '*a*' is not assignable to parameter of type 'number'
