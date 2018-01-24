/*(function(){
    console.log('1');
    console.log('2');
    setTimeout(function(){
        console.log('3');
    },1000);
    setTimeout(function(){
        console.log('4');
    },10);
    console.log('5');
})();*/
/*var divide = function(a,b,fn,errFn){
    var result;
    setTimeout(function(){
        try{
            if(b===0)
                throw 'Cannot divide by Zero';
                result = a / b;
                fn(result);
        }
        catch(err){
            errFn(err);
        }
    },0);
}

divide(25,0,function(res){
    console.log(res);
},function(err){
    if(err)
    console.log(err);
});*/


/*var promiseObj = new Promise(function(resolve,reject){
    resolve(5);
    //reject('Some Error occured');
});

promiseObj.then(function(res){
    console.log(`Fullfilled : ${res}`);
},function(err){
    console.log(`Rejected : ${err}`);
});*/


var divide = function(a,b){
    var result;
    console.log('Promise Invoked');
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            try{
                if(b===0)
                    throw 'Cannot divide by Zero';
                    result = a / b;
                    resolve(result);
            }
            catch(err){
                reject(err);
            }
        },0);
    });
}

/*divide(25,5).then(function(res){
    console.log(res);
},function(err){
    console.log(err);
});*/

var dividePromise = divide(25,5);

/*
dividePromise.then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
});*/


var promiseObj = Promise.resolve(Math.random());

promiseObj.then(function(res){
    console.log(res);
});

promiseObj.then(function(res){
    console.log(res);
});

promiseObj.then(function(res){
    console.log(res);
});































