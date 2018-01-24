import { FormControl } from '@angular/forms';

export class EmailValidator {
    /*Sync Validation */
    static isValidEmail(control: FormControl) {
        if (control.value == 'karthik@test.com') {
            return { invalidMailId: true }
        }
        return null;
    }
    /*Async Validation */
    /*static isValidEmail(control: FormControl) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == 'karthik@test.com') {
                    resolve({ invalidMailId: true });
                }
                resolve(null);
            }, 5000);
        });
    }*/
}
