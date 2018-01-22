import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
   constructor(){
       var observableObj:Observable<number> = Observable.from([1,2,3,4])
        .map(function(n:number){
            return n * 10;
       });


       //var observableObj = Observable.interval(1000);

       observableObj.subscribe(function(n){
            console.log(`Number : ${n}`);
       },function(err){
            console.log(`Error : ${err}`);
       },function(){
           console.log('All items are successfully retrieved');
       });

       

       /*var promiseObj = Promise.resolve(Math.random());
       var observablePromiseObj:Observable<number> = Observable.fromPromise(promiseObj);

       observablePromiseObj.subscribe(function(n:number){
        console.log(`Random Number : ${n}`);
      },null,function(){
          console.log('Task completed Successfully')
      });


       var observableObj:Observable<MouseEvent> = Observable.fromEvent(document,'mousemove');

       observableObj.subscribe(function(e:MouseEvent){
            document.querySelector('#target').innerHTML = `<h1> X : ${e.x} Y : ${e.y}</h1>`
       });
       */



   }
}
