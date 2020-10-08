var Print1 = function () {
    console.log("Print1, Hello TypeScript");
};
var Print2 = function () { return console.log("Print2, Hello TypeScript"); };
var sum = function (x, y) { return x + y; };
Print1();
Print2();
console.log(sum(3, 4));
