class Emp {
    constructor() {
        console.log("Employee constructor Invoked");
    }
}
class Manager extends Emp {
    constructor() {
        super();
        console.log("Manager constructor Invoked");
    }
}


new Manager();