import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html'
})
export class AppComponent {
    city:string;
    state:string;
    currentTime:string;
    modelProperty:string;

    constructor(){
        this.city = 'Bangalore';
        this.state = 'Karnataka';
        this.currentTime = new Date().toLocaleTimeString();
        this.modelProperty = 'Initial Value';
    }

    changeTime():void{
        this.currentTime = new Date().toLocaleTimeString();
    }
}