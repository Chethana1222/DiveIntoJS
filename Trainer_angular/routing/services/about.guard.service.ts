import {Injectable} from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AboutGuardService implements CanActivate{
    constructor(private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean
    {
       console.log(route);
       console.log(route.params.id);
       console.log(route.url[1].path);
       var data = route.url[1].path;
       var regex = /^\d+$/;

       if(!isNaN(parseInt(data)) && data.match(regex) && parseInt(data) > 0){
           return true;
       }else{
          this.router.navigate(['./home']);
           return false;
       }
    
    }
    
}