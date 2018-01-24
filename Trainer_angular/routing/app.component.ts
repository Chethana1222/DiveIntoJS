import { Component,Inject,OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
   
})
export class AppComponent {
  id:number;
  constructor(){
      this.id = 101;
  }
}