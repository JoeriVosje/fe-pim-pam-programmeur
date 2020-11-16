import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { TokenService } from './token.service';

@Injectable({providedIn: 'root'})
export class AdminLoginGuard implements CanActivate {
    constructor(public tokenService: TokenService, protected router: Router) { }

    public canActivate(): boolean {
        const user = this.tokenService.readToken();
        if (user == null || user.roleId !== 1) {
            this.router.navigate(['/login']);
            return;
        }
        return true;
    }
}
