//CallBack Queue and deferred execution

var addFn = function(a, b, fn) {
    var result; //undefined

    //Deferred Execution 
    setTimeout(function() {
        result = a + b;
        fn(result);
    }, 1000);

    // return result; //no use of returning result
}

var af = addFn(3, 4, function(aff) {
    console.log(aff);
});
//Callback funtion should be passed as an parameter at the end