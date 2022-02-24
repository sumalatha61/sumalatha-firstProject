import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserValidators } from "../user.validators";
@Component({
    selector: 'registration',
    templateUrl: './registration.component.html'
})

export class RegistrationComponent {
    title = 'Registration';
    imgUrl: string = "http://s1.picswalls.com/wallpapers/2014/02/08/spring-desktop-background_03111888_25.jpg";

    registerForm = new FormGroup({
        emailAddress: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')], UserValidators.shouldBeUnique),
        password: new FormControl('', [Validators.required, UserValidators.cannotContainSpace]),
        mobileNumber: new FormControl('', [Validators.required, UserValidators.cannotContainSpace])
    });
    constructor(private router: Router) {
    }
    register() {
        //calling API for register
        this.router.navigate(['/login']);
    }
    get email() {
        return this.registerForm.get('emailAddress');
    }
    get password() {
        return this.registerForm.get('password');
    }
    get mobileNumber() {
        return this.registerForm.get('mobileNumber');
    }
}