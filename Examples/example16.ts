let sum1 = function (x: number, y: number): number {
    return x + y;
}

let sum2 =  (x: number, y: number): number => {
    return x + y;
}

console.log(sum1(10,10));
console.log(sum2(20,20));