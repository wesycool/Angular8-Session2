// Named function
function greet1(name: string): string {
    return "hello " + name;
}

// function expression
let greet2 = function(name: string): string {
    return "hello " + name;
}

//Arrow function expression
let greet3 = (name: string): string => {
    return "hello " + name;
}

//Shorthand arrow function expression
let greet4 = (name: string): string => 
    "hello " + name;

console.log(greet1("albert"));
console.log(greet2("frances"));
console.log(greet3("jaden"));
console.log(greet4("lorraine"));
