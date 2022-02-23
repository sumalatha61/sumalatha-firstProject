import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated === 'True') {
            return true;
        }
        else {
            return this.router.navigate(['/un-authorized']);
        }
    }
}