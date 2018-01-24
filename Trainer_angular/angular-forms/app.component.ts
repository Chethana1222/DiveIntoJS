import {Component} from '@angular/core';
import { Person } from '../models/person';

@Component({
     selector: 'app-root',
     templateUrl:'./app.component.html',
     styles:[
        'input.ng-invalid.ng-dirty{border-color: red}'
    ]
 })
 export class AppComponent{
    
 }