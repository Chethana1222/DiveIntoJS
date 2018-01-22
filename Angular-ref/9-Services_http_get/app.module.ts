import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CalculatorService } from './services/calculator.service';

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [CalculatorService, {
        provide: 'square',
        useFactory: () => (n: number) => n * n
    }, {
            provide: 'email',
            useValue: 'karthik_muthukrishnan@outlook.com'
        }]
})
export class AppModule {

}
