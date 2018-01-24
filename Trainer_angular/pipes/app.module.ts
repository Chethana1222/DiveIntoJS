import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChangeCasePipe } from './pipes/changecase.pipe';

@NgModule({
    imports: [BrowserModule],
    declarations: [ AppComponent, ChangeCasePipe],
    bootstrap: [AppComponent]
})
export class AppModule {

}