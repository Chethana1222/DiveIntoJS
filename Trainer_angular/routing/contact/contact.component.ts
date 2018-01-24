import { Component } from '@angular/core';

@Component({
  template: `
    <div class="well">
      <h1>Contact Component</h1>
      <hr>
      <ol class="breadcrumb">
      <li>
          <a [routerLink]="['permanent']">Permanent</a>
      </li>
      <li>
              <a [routerLink]="['temporary']">Temporary</a>
      </li>
  </ol>
  <hr>
  <router-outlet></router-outlet>
    </div>
  `,
})
export class ContactComponent  {

}
