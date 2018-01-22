import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
    selector:'[data-exBtn]'
})
export class ButtonHoverDirective{
    @HostBinding('title')
    titleProperty:string;

    constructor(){
        this.titleProperty='Custom Directive title';
    }

    @HostListener('mouseover',['$event'])
    mouseEnter(e:MouseEvent):void{
        var buttonElement:HTMLButtonElement = e.target as HTMLButtonElement;
        var style = buttonElement.attributes.getNamedItem('data-style').value;
        buttonElement.classList.add(style);
    }

    @HostListener('mouseout',['$event'])
    mouseExit(e:MouseEvent):void{
        var buttonElement:HTMLButtonElement = e.target as HTMLButtonElement;
        var style = buttonElement.attributes.getNamedItem('data-style').value;
        buttonElement.classList.remove(style);
    }
}