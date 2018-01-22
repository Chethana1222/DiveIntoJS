import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Person } from '../models/person';

@Component({
    selector: 'inner-app',
    templateUrl: 'inner.component.html'
})
export class InnerComponent {
    @Input()
    appMsgHolder: string;

    @Output()
    innerEvent: EventEmitter<string>;

    @Output()
    personEvent:EventEmitter<Person>;

    innerMsg: string;

    personObj: Person;

    constructor() {
        this.appMsgHolder = 'Some Initial data';
        this.innerMsg = 'Message from Inner Component';
        this.innerEvent = new EventEmitter<string>();
        this.personEvent = new EventEmitter<Person>();
        this.personObj = { name: 'Ashik', age: 34 };
    }

    send(): void {
        //To Trigger Custom Event with message
        this.innerEvent.emit(this.innerMsg);
        this.personEvent.emit(this.personObj);
    }

}