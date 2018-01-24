import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonHoverDirective } from './directives/button.hover.directive';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ AppComponent, ButtonHoverDirective],
    bootstrap: [AppComponent]
})
export class AppModule {

}