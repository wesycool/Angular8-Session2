function add1(a, b) {
    return a + b;
}

function add2(a: number, b: number) {
    return a + b;
}

function add3(a: number, b: number): number {
    return a + b;
}

console.log(add1(1,2));
console.log(add2(2,2));
console.log(add3(3,3));