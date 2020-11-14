import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({providedIn: 'root'})
export class StudentLoginGuard implements CanActivate {
    constructor(public tokenService: TokenService, protected router: Router) { }

    canActivate() {
        const user = this.tokenService.readToken();
        if(user == null) {
            this.router.navigate(['/login']);
            return;
        }

        return true;
    }
}