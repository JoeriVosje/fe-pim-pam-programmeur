import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.tokenService.readToken();
        if(user == null){
            return next.handle(req);
        }
        const token = user.accessToken;

        req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });

        return next.handle(req);
    }

}