import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routes';
import { PermanentComponent } from './permanent/permanent.component';
import { TemporaryComponent } from './temporary/temporary.component';

@NgModule({
    imports:[CommonModule],
    declarations:[PermanentComponent, TemporaryComponent],
    exports:[CommonModule],
    //bootstrap:[] //Cant be used here
})
export class ContactModule{

}