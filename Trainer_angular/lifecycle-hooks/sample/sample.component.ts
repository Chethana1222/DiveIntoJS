import { Component, OnChanges,OnInit, Input ,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  inputs:['firstName','lastName']
})
export class SampleComponent implements OnInit,OnChanges {


  firstName:string;
  lastName:string;
  
  constructor() {
    console.log('Sample Component Constructor Invoked');
    this.firstName = '';
    this.lastName = '';
   }
   ngOnInit():void{
    console.log('Sample Component - OnInit Invoked');
   }
   ngOnChanges(changes: SimpleChanges): void{
     console.log('Sample Component - OnChanges Occured');
      console.log(changes);
   }
   

}
