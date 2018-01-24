import {Component} from '@angular/core';

@Component({
    templateUrl:'./app.component.html',
     selector: 'app-root'
 })
 export class AppComponent{
     persons:any[];
     employees:any[];
     constructor(){
         this.persons = [
             {id:1, name:'Karthik'},
             {id:2, name:'Ramesh'}
         ],
         this.employees = [
             {id:1, name:'Karthik', department:'Training'},
             {id:2, name:'Ramesh', department:'HR'}
         ]
     }
 }