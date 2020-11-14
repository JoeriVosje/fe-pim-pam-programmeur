import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginRequest } from './login-request.model';
import { LoginResponse } from './login-response.model';


@Injectable({ providedIn: 'root' })
export class LoginService {

  private baseurl = "https://be-pim-pam-programmeur.azurewebsites.net/api";

  public constructor(private readonly httpClient: HttpClient) {
  }

  public login(loginRequest: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.httpClient.post<LoginResponse>(`${this.baseurl}/user/login`, loginRequest, {
      observe: 'response'
    });
  }
}
