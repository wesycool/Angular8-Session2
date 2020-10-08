"use strict";
exports.__esModule = true;
var Emp = require("./Employee");
console.log(Emp.age); //20
var empObj = new Emp.Employee("Bill Gates", 2);
empObj.displayEmployee(); //Output: Employee Code: 2, Employee Name: Bill Gates
