import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven-component/template.driven.component';
import { ModelDrivenComponent } from './model-driven-component/model.driven.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ AppComponent, TemplateDrivenComponent, ModelDrivenComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}