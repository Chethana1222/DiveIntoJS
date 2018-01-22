import {Component} from '@angular/core';

@Component({
    selector:'app-root',
   /* template:`<div class="jumbotron">
    <h1>{{title}}</h1>
    </div>`
    */
    templateUrl:"./app.component.html"
})
export class AppComponent{
 title:string;
 constructor(){
     this.title="Angular welcomes you";
 }
}