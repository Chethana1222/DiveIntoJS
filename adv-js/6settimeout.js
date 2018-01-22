//Self invoked function

(function() {

    console.log('1');
    console.log('2');

    setTimeout(function() {
        console.log("5");
    }, 1000);

    setTimeout(function() {
        console.log("6");
        //  for (;;); //Now 6 executes but not 5
    }, 100);
    console.log('3');
    console.log('4');
    // for (;;);  //If infinite for loop is included then this function never executed 5
})();