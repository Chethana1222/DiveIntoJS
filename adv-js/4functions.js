var i = function() {}

console.log(typeof(i))

var add = function(a, b) {
    return this;
}

var add2 = function(a, b) {
    return a + b;
}

//console.log(add(5, 6));

console.log(add2(5, 6));