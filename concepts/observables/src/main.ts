import "rxjs/Rx";;
import { Observable } from "rxjs/Observable";


//Create observable object which returns stream of data
var observableObject:Observable<number> = Observable.from([23,44,54,767]);

//Consume observable 

console.log("..........Concept of Observables........");
observableObject.subscribe(
(data:number)=>{
console.log(data);
},(err)=>{
console.log(err);
},()=>{
console.log("Task1 successfully completed");
});

//Create observable object which returns array as data
var observableObject1:Observable<number[]> = Observable.from([[23,44,54,767],[23,34,34,34,34]]);

//Consume observable 

observableObject1.subscribe(
(data:number[])=>{
console.log(data);
},(err)=>{
console.log(err);
},()=>{
console.log("Task2 successfully completed");
});

console.log("..........Concept of multiple promises........");
//Concept of multiple promises

var promise1=Promise.resolve(2);
var promise2=Promise.resolve(3);
var promise3=Promise.resolve(34);

var allPromise=Promise.all([promise2,promise1,promise1,promise3]);

console.log("consume promises using then method........");
allPromise.then((data)=>{
// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);
data.forEach(element => {
    console.log(element);
}); 
});

console.log("... Converting promise to observables........");

var observablePromiseObj:Observable<number[]> = Observable.fromPromise(allPromise);

console.log(".......consume promises using subscribe method.");

observablePromiseObj.subscribe((data)=>{
    console.log(data);
},null,()=>{console.log("Observable consumed promise using subscribe method")});


console.log("... Creating observables using moverover event ........");

var observableEvent:Observable<MouseEvent>=Observable.fromEvent(document,'mousemove');

//console.log(observableEvent.constructor.name);  //FromEventObservable

observableEvent.subscribe((event:MouseEvent)=>{
   // console.log(event.constructor.name); //MouseEvent
    document.querySelector("#target").innerHTML=`X: ${event.x} Y: ${event.y}`;
});

console.log("... Creating observables using inbuilt of method ........");

var ofObj:Observable<number>=Observable.of(1,2,3,4,5,6,7);
ofObj.subscribe((data)=>{console.log(data);});


console.log("... Creating observables using logic in subscribe method ........");
var obSub:Observable<number>=Observable.from([1,2,3]);
obSub.subscribe((data)=>{console.log(data*10);});

console.log("... Creating observables using filters for logic ........");
var obF:Observable<number>=Observable.from([1,2,3]).map(n=>n*10);
obF.subscribe((data)=>{console.log(data);});
console.log("... Creating observables using filters for logic Ends........");