import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-about',
  template: `
    <div class="well">
      <h1>About Component</h1>
      <hr>
      <h2>{{ 'Id : '+ id}}</h2>
      <hr>
      <button class="btn btn-primary" (click)="navigate()">Go to Home</button>
    </div>
  `,
})
export class AboutComponent  {
  id:number;
  constructor(private route:ActivatedRoute, private router:Router){
    this.route.params.subscribe((param)=>{
      this.id = parseInt(param['id']);
    })
  }
  navigate():void{
    this.router.navigate(['./home']);
  }
}
