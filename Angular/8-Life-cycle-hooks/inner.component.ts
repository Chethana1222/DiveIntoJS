import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-inner',
  template: `
    <div class="well">
      <h1>Inner Component</h1>
    </div>
  `
})
export class InnerComponent implements OnInit, OnDestroy {
    constructor() {
      console.log('InnerComponent - Constructor Invoked');
    }
    ngOnInit(): void {
      console.log('InnerComponent - OnInit Invoked');
    }
    ngOnDestroy(): void {
      console.log('InnerComponent - Destroyed  / Removed from the DOM');
    }
}