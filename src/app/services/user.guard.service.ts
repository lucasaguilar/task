import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
    providedIn: 'root'
})
export class UserGuardService implements CanActivate {

    constructor(private userService: UserService, private router: Router) {

    }

    canActivate() {
        if (!this.userService.getIsUserLoggedIn()) {
            console.log('No estás logueado');
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }


}
