let Print1 = function () {
    console.log("Print1, Hello TypeScript");
}

let Print2 =  () =>  console.log("Print2, Hello TypeScript");

let sum = (x: number, y: number) => x + y;

Print1();
Print2();
console.log(sum(3,4));