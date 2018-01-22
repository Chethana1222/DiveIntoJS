import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector:'app-root',
    templateUrl:'./app.component.html',
  //  styleUrls:['app.component.css'],
    styles:[`.sty01{text-transform:uppercase;color:red} `,`.sty02{color: green;text-transform: uppercase;
    font-weight: bold;
}`],
    encapsulation:ViewEncapsulation.Emulated
   // encapsulation:ViewEncapsulation.None
    // encapsulation:ViewEncapsulation.Native
})
export class AppComponent{
    title:string;
    constructor(){
        this.title = 'Angular Component'
    }
}
