import { Routes } from '@angular/router';
import { PermanentComponent } from './permanent/permanent.component';
import { TemporaryComponent } from './temporary/temporary.component';

export const contactRoutes:Routes =[
    {path:'', redirectTo:'permanent', pathMatch:'full'},
    {path:'permanent', component: PermanentComponent},
    {path:'temporary', component: TemporaryComponent}
]
 

