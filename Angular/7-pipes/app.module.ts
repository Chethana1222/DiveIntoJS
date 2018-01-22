import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChangeCasePipe } from "./pipe/change.case.pipe";


@NgModule({
  declarations: [
    AppComponent,ChangeCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
