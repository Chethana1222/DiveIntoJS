import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InnerComponent } from './inner/inner.component';
import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ AppComponent, InnerComponent, SampleComponent ],
    bootstrap: [AppComponent]
})
export class AppModule {

}