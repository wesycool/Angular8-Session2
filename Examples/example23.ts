class Employee {
	empCode: number;
	empName: string;

	constructor(empcode: number, name: string) {
		this.empCode = empcode;
		this.empName = name;
	}
}

let emp = new Employee(100,"Steve");