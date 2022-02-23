import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value && (control.value as string).indexOf(' ') >= 0) {
            return { containSpace: true, position: (control.value as string).indexOf(' ') };
        }
        else
            return null;
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            //let response = userService.CheckEmail(control.value);
            //if(response){  return resolve({ notUnique: true }); } else { return resolve(null);}
            setTimeout(() => {
                if (control.value == 'sreeram@gmail.com') {
                    return resolve({ notUnique: true });
                }
                else
                    return resolve(null);
            }, 2000)
        })
    }
}