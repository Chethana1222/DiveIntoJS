import "rxjs/Rx";;
import { Observable } from "rxjs/Observable";


// //Create observable object which returns stream of data
// var observableObject:Observable<number> = Observable.from([23,44,54,767]);

// //Consume observable 

// console.log("..........Concept of Observables........");
// observableObject.subscribe(
// (data:number)=>{
// console.log(data);
// },(err)=>{
// console.log(err);
// },()=>{
// console.log("Task1 successfully completed");
// });

// //Create observable object which returns array as data
// var observableObject1:Observable<number[]> = Observable.from([[23,44,54,767],[23,34,34,34,34]]);

// //Consume observable 

// observableObject1.subscribe(
// (data:number[])=>{
// console.log(data);
// },(err)=>{
// console.log(err);
// },()=>{
// console.log("Task2 successfully completed");
// });

// console.log("..........Concept of multiple promises........");
// //Concept of multiple promises

// var promise1=Promise.resolve(2);
// var promise2=Promise.resolve(3);
// var promise3=Promise.resolve(34);

// var allPromise=Promise.all([promise2,promise1,promise1,promise3]);

// console.log("consume promises using then method........");
// allPromise.then((data)=>{
// // console.log(data[0]);
// // console.log(data[1]);
// // console.log(data[2]);
// data.forEach(element => {
//     console.log(element);
// }); 
// });

// console.log("... Converting promise to observables........");

// var observablePromiseObj:Observable<number[]> = Observable.fromPromise(allPromise);

// console.log(".......consume promises using subscribe method.");

// observablePromiseObj.subscribe((data)=>{
//     console.log(data);
// },null,()=>{console.log("Observable consumed promise using subscribe method")});


// console.log("... Creating observables using moverover event ........");

// var observableEvent:Observable<MouseEvent>=Observable.fromEvent(document,'mousemove');

// //console.log(observableEvent.constructor.name);  //FromEventObservable

// observableEvent.subscribe((event:MouseEvent)=>{
//    // console.log(event.constructor.name); //MouseEvent
//     document.querySelector("#target").innerHTML=`X: ${event.x} Y: ${event.y}`;
// });

// console.log("... Creating observables using inbuilt of method ........");

// var ofObj:Observable<number>=Observable.of(1,2,3,4,5,6,7);
// ofObj.subscribe((data)=>{console.log(data);});


// console.log("... Creating observables using logic in subscribe method ........");
// var obSub:Observable<number>=Observable.from([1,2,3]);
// obSub.subscribe((data)=>{console.log(data*10);});

// console.log("... Creating observables using filters for logic ........");
// var obF:Observable<number>=Observable.from([1,2,3]).map(n=>n*10);
// obF.subscribe((data)=>{console.log(data);});
// console.log("... Creating observables using filters for logic Ends........");


// console.log("... Creating observables using interval and filter take methods ........");

// var obF1:Observable<number>=Observable.interval(1000).take(2);
// obF1.subscribe((data)=>{console.log(data);});

// console.log("... Creating observables using range and filter delay methods ........");
// //Produce the data starting from number 5 producing 5 data delaying 3000 miliseconds
// var obF2:Observable<number>=Observable.range(5,5).delay(3000);
// obF2.subscribe((data)=>{console.log(data);});

// console.log("... findIndex methods ........");

// Observable.from([10,20,30,40])
//     .findIndex(n=>n>20)
//     .subscribe((result:number)=>{
//         console.log(`Result index is : ${result}`);
//     });


//     console.log("... distinct methods ........");

// Observable.from([122,323,2323,323,122,333,333,23,23])
//     .distinct()
//     .subscribe((result:number)=>{
//         console.log(`Result is : ${result}`);
//     });

//     console.log("... Merge methods ........");

//     Observable.interval(3000)
//         .merge(Observable.interval(1000))
//         .subscribe((result:number)=>{
//             console.log(result);
//         });

        console.log("Mathematical Operators");

        (()=>{
            //Mathematical operators
            console.log("Mathematical Operators");
            Observable.from([45,878,55,85]).max().subscribe(val=>console.log(`Max = ${val}`));
            Observable.from([45,878,55,85]).min().subscribe(val=>console.log(`Min = ${val}`));
            Observable.from([45,878,55,85]).count().subscribe(val=>console.log(`Count = ${val}`));
            Observable.from([1,2,3,4,5]).reduce((x,y)=>x*y).subscribe(val=>console.log(`Reduce = ${val}`));

           
            console.log("Boolean Operators");
            Observable.from([45,878,55,85]).every(val=>val%2===0).subscribe(val=>console.log(`Every = ${val}`));
           
            Observable.from([42,878,52,82]).every(val=>val%2===0).subscribe(val=>console.log(`Every = ${val}`));
           
            // sequenceEqual if both array passed contains same sequence of data then returns true
            Observable.from([42,878,52,82])
                .sequenceEqual(
                    Observable.from([42,878,52,1])
                )
                .subscribe(val=>console.log(`sequenceEqual = ${val}`));

            Observable.from([2,20,30,6,23]).filter(val=>val%2===0).subscribe(val=>console.log(`Filter= ${val}`));
                
            Observable.from([221,20,30,6,23]).find(val=>val%2===0).subscribe(val=>console.log(`Find= ${val}`));
     
            Observable.from([2,20,30,6,23]).first().subscribe(val=>console.log(`first= ${val}`));

            Observable.from([2,20,30,6,23]).skip(2).subscribe(val=>console.log(`skip= ${val}`));

            Observable.from([2,20,30,6,23]).take(2).subscribe(val=>console.log(`take= ${val}`));
        })();