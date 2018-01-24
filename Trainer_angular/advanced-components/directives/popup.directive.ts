import { Directive,Inject,Input, ElementRef } from '@angular/core';
@Directive({
    selector: '[popup]',
    inputs: ['message'],
    host:{
        '(click)':'displayMessage()'
    },
    exportAs:'popup'
})
export class PopupDirective{
   message:string;

    constructor(private el:ElementRef){
        console.log(el);
    }

    displayMessage():void{
        alert(this.message);
    }
}