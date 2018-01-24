import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AboutGuardService } from './services/about.guard.service';
import { ContactComponent } from './contact/contact.component';
import { contactRoutes } from './contact/contact.routes';


export const appRoutes:Routes = [
    {path:'', redirectTo:'home', pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'about/:id', component: AboutComponent, canActivate:[AboutGuardService] },
    { path:'contact', component: ContactComponent, children:contactRoutes },
    { path:'**', component: NotFoundComponent }
    
]
