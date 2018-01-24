import { Component,Inject,Input, ElementRef } from '@angular/core';
@Component({
    selector: '[transclude]',
    inputs: ['panelTitle'],
    host:{
        class:'panel panel-default'
    },
    template:`<div class="panel-heading">
        <h3 class="panel-title">{{ panelTitle }}</h3>
        </div>
        <div class="panel-body">
            <ng-content></ng-content>
        </div>`
})
export class TranscludeComponent{
   panelTitle:string;
    constructor(private el:ElementRef){
        console.log('Tranclude Component');
        console.log(el);
    }
}