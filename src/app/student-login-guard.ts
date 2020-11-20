import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { TokenService } from './token.service';

@Injectable({providedIn: 'root'})
export class StudentLoginGuard implements CanActivate {
    constructor(public tokenService: TokenService, protected router: Router) { }

    public canActivate(): boolean {
        const user = this.tokenService.readToken();
        if (user === null || user.roleId !== 0) {
            this.router.navigate(['/login']);
            return;
        }
        return true;
    }
}
