import "rxjs/Rx";;
import { Observable } from "rxjs/Observable";

//Create observable object which returns stream of data
var observableObject:Observable<number> = Observable.from([23,44,54,767]);

//Consume observable 

observableObject.subscribe(
(data:number)=>{
console.log(data);
},(err)=>{
console.log(err);
},()=>{
console.log("Task successfully completed");
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
console.log("Task successfully completed");
});

//Concept of multiple promises

var promise1=new Promise<number>.resolve(2);
var promise2=new Promise.resolve(3);
var promise3=new Promise(34);

var allPromise=Promise.all([promise1,promise2,promise3]);

allPromise.then((data)=>{
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);

})