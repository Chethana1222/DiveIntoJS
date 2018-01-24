import { Component,Input} from '@angular/core';
@Component({
    selector: 'kt-table',
    templateUrl:'./table.component.html'
})
export class TableComponent {
   @Input() items:any[];
    constructor(){
    
    }

}