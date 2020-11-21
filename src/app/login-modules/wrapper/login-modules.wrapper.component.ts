import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/token.service';
import { LoginRequest } from '../login-request.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-modules.wrapper',
  templateUrl: './login-modules.wrapper.component.html',
  styleUrls: ['./login-modules.wrapper.component.css']
})
export class LoginModulesWrapperComponent implements OnInit {

  public loginFailed = false;

  constructor(private loginService: LoginService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  login(request: LoginRequest): void {
    this.loginService.login(request).subscribe({
      next: e => {
        this.tokenService.writeToken(e.body);
      },
      error: error => {
        this.loginFailed = true;
      },
      complete: () => {
        const user = this.tokenService.readToken();
        if (user == null){
          this.loginFailed = true;
        }
        if (user.roleId === 1) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/student']);
        }
      }
    });
  }
}
