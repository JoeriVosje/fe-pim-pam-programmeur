
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from './login-modules/login-response.model';


@Injectable({ providedIn: 'root' })
export class TokenService {

  public constructor(private readonly cookieService: CookieService) {
  }

  private cookieName = "loginCookie";

  public writeToken(loginResponse: LoginResponse): void {
    // TODO check if the cookie can be created as a secure cookie
    const expireDate = new Date();
    expireDate.setHours(expireDate.getHours()+20);
    this.cookieService.set(this.cookieName, JSON.stringify(loginResponse), expireDate);
  }

  public readToken(): LoginResponse {
    const cookie = this.cookieService.get(this.cookieName);
    if(cookie == ""){
        return null;
    }

    return JSON.parse(cookie);
  }
  
}
