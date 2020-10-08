import * as Emp from "./Employee"
console.log(Emp.age); //20

let empObj = new Emp.Employee("Bill Gates",2);
empObj.displayEmployee(); //Output: Employee Code: 2, Employee Name: Bill Gates