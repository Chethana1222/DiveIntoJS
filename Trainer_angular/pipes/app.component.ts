import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Person } from './models/person';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
   currentDate:Date;
   personObj:Person;
   observableObj:Observable<number>;
  observableCounter:number;

   constructor(){
       this.currentDate = new Date();
       this.personObj = {
           name:'Karthik',
           hobbies:['Programming','Music']
        };
        this.observableObj = Observable.interval(1000);
   }

   subscribeIt():void{
        this.observableObj.subscribe((n:number)=>{
            this.observableCounter = n;
        });
   }
}