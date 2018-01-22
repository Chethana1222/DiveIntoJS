//Higher order function =HOF


var samplefunction = function() {
    var infoPrint = "Sample Function"; //local variable
    globalPrint = "Exilant"; //global variable

    console.log("Variable inside function");
    console.log(infoPrint);
    console.log(globalPrint);
}

samplefunction();
console.log("Invoking Variable outside function ");
//console.log(infoPrint)    //Not accessible
//console.log(globalPrint)

//Concept of HOF Below

var print = function(data) {
    console.log(data);
}

var sampleFn = function(fn) {
    var info = "Testing Sample";
    fn(info);
}

sampleFn(print); //User Defined HOF


var nums = [54, 758, 154, 22, 10, 9];

nums.forEach(print); //Inbuilt HOF