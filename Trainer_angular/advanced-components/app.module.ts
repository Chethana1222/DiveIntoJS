import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableComponent } from './shared-components/table.component';
import { TranscludeComponent } from './shared-components/transclude.component';
import { KeysPipe } from './pipes/keys.pipe';
import { PopupDirective } from './directives/popup.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [ AppComponent, TableComponent, TranscludeComponent, KeysPipe, PopupDirective],
    bootstrap: [AppComponent]
})
export class AppModule {

}