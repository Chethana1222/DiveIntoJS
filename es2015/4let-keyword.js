//self invoking function
/*
(function() {
    var i = 100;
    if (true) {
        var i = 1000;
        console.log(`Inside the block i=${i}`);
    }
    console.log(`Outside the block i=${i}`);
})();
*/

//When to maintaining the variable scope specific use let keyword

(function() {
    let i = 100;
    if (true) {
        let i = 1000;
        console.log(`Inside the block i=${i}`);
    }
    console.log(`Outside the block i=${i}`);
})();