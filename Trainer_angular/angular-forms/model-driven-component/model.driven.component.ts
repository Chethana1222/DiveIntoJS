import {Component} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidator } from '../validators/email.validator';

@Component({
     selector: 'app-model',
     templateUrl:'./model.driven.component.html',
     styles: [
        'input.ng-invalid.ng-dirty{border-color: red}'
    ]
 })
 export class ModelDrivenComponent{
    personForm: FormGroup;
    
        constructor(private fb: FormBuilder) {
            this.buildForm();
            console.log(this.personForm.value);
        }
    
        get name():FormControl{
            return this.personForm.get('name') as FormControl;
        }
    
        get email():FormControl{
            return this.personForm.get('email') as FormControl;
        }
        
        buildForm() {
            this.personForm = this.fb.group({
                name: [null,[
                        Validators.required,
                        Validators.pattern('[a-zA-Z]+')
                    ]
                ],
                 //email: null,
                 //sync Validation
                 email: [null,EmailValidator.isValidEmail],
                 //async Validation
                //email: [null,null,EmailValidator.isValidEmail],
                city: 'bangalore'
            });
        }
    
        submitForm():void{
            console.log(this.personForm.value);
        }
    
        resetForm():void{
            console.log(this.personForm.reset());
        }
 }