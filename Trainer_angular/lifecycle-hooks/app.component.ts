import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    status:boolean;
    firstName:string;
    lastName:string;

    constructor(){
        this.status = false;
        this.firstName = 'Karthik';
        this.lastName = 'Muthukrishnan';
    }
}