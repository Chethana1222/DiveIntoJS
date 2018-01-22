import { Component, ViewEncapsulation } from '@angular/core';
import {Person} from './models/person';

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html'
})
export class AppComponent {
  appMsg:string;
  innerMsgHolder:string;
  personObjHolder:Person;

  constructor(){
      this.appMsg = 'Message from App Component';
      this.innerMsgHolder = '...';
      this.personObjHolder = {name:'',age:0};

  }
  getMsg(msg:string):void{
     this.innerMsgHolder = msg;
  }

  getPersonDetails(person:Person):void{
    this.personObjHolder = person;
  }
}
