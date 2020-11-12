import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
