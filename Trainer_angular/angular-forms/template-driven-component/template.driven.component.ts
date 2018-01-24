import {Component} from '@angular/core';
import { Person } from '../../models/person';

@Component({
     selector: 'app-template',
     templateUrl:'./template.driven.component.html',
     styles:[
        'input.ng-invalid.ng-dirty{border-color: red}'
    ]
 })
 export class TemplateDrivenComponent{
    onSubmit(person:Person){
        alert(`Name : ${person.name}  Age : ${person.age}`);
    }
 }