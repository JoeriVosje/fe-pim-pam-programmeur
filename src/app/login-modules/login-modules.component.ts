import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LoginRequest } from './login-request.model';

/**
 * Dit component moet de bovenste laag van de login app
 * worden. Dit is het 'slimme' component van waaruit de
 * logica wordt geprogrammeerd. Data wordt van hieruit
 * geïnjecteerd in de onderliggen 'domme' componenten.
 * Vanuit de domme componenten worden gebruikers interactie
 * ontvangen en hierop wordt vanuit dit component een vervolg
 * actie ondernomen.
 */
@Component({
  selector: 'login-modules',
  templateUrl: './login-modules.component.html',
  styleUrls: ['./login-modules.component.css']
})
export class LoginModulesComponent implements OnInit {

  @Output()
  public login: EventEmitter<LoginRequest> = new EventEmitter();

  @Input()
  public loginFailed = false;

  private password: string;
  private email: string;

  private realPimpampCounter = 0;
  showTheRealPimPamProgrammeur = false;

  constructor() { }

  increasePimPampCounter(): void {
    if (!this.showTheRealPimPamProgrammeur) {
      this.realPimpampCounter++;
      if (this.realPimpampCounter === 10) {
        this.showTheRealPimPamProgrammeur = true;
      }
    }
  }

  ngOnInit(): void {
  }

  inloggen(): void {
    const loginRequest: LoginRequest = {email: this.email, password: this.password};
    this.login.emit(loginRequest);
  }

  public getEmail(value: string): void {
    this.email = value;
  }

  public getPassword(value: string): void {
    this.password = value;
  }
}
