import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRouteModule } from './app.route.module';
import { NotFoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { AboutGuardService } from './services/about.guard.service';
import { ContactModule } from './contact/contact.module';


@NgModule({
    imports: [BrowserModule,AppRouteModule,ContactModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent, ContactComponent],
    bootstrap: [AppComponent],
    providers:[AboutGuardService]
  
})
export class AppModule {

}