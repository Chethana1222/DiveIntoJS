import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { InnerComponent } from './inner.component';
import { SampleComponent } from './sample.component';


@NgModule({
  declarations: [
    AppComponent,
    InnerComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
