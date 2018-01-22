//classes in Javascript ES2015

class Employee {
    //we can have only one constructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

var e = new Employee(9393, "CK");

console.log(e);
console.log(e.constructor.name);
console.log(e instanceof Employee);