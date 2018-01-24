import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // styleUrls:['app.component.css'],
    styles: [
        '.sty01{text-transform:uppercase;color:red}',
        '.sty02{text-transform:uppercase;color:green}',
    ],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
    title: string;
    constructor() {
        this.title = 'Angular Component'
    }
}