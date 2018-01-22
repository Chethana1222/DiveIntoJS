import { Component } from '@angular/core';
import { Employee } from '../app/models/employee';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    showDiv: boolean;
    cities: string[];
    employees: Employee[];
    counter: number;
    isPrimary: boolean;
    fontWeight: string;
    fontStyle: string;
    fontSize: string;
    modelProperty:string;


    constructor() {
        this.showDiv = false;
        this.cities = ['Bengaluru', 'Chennai', 'Mumbai', 'Delhi'];
        this.employees = [
            { id: 101, name: 'Karthik' },
            { id: 102, name: 'Ashik' },
            { id: 103, name: 'John' }
        ];
        this.counter = 0;
        this.isPrimary = false;
        this.fontSize = '20px';
        this.fontWeight = 'normal';
        this.fontStyle = 'normal';
        this.modelProperty = 'Initial Value';

    }

    /*toggleStatus():void{
        this.showDiv = !this.showDiv;
    }*/

    changeSize(event: Event): void {
        var element: HTMLInputElement = event.target as HTMLInputElement;
        var size = element.value + 'px';
        this.fontSize = size;
    }
}