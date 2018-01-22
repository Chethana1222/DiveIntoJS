//Normal Function

var addF = function(a, b) {
    return a + b;
}

//Arrow Function

var addFn = (a, b) => a + b;

console.log(addF(3, 4)); //7
console.log(addFn(4, 5)); //9


//For multi line code in arrow function use return

var multiFn = (a, b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
}


console.log(multiFn(3, 4));

//Difference b/n normal and arrow function

//NORMAL Function starts

// (function() {
//     this.counter = 0;

//     setInterval(function() {
//         console.log(`Counter is ${this.counter++}`);
//     }, 1000);
// })();

// output: Counter is NaN

//Using Bind function attached we can use same instance 
// (function() {
//     this.counter = 0;

//     setInterval(function() {
//         console.log(`Counter is ${this.counter++}`);
//     }.bind(this), 1000);
// })();


//NORMAL function ends here

//ARROW function starts

(() => {
    this.counter = 0;

    setInterval(() => {
        console.log(`Counter = ${this.counter++}`);
    }, 1000);
})();