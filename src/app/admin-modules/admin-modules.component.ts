import { Component, OnInit } from '@angular/core';

/**
 * Dit component moet de bovenste laag van de modules app
 * worden. Dit is het 'slimme' component van waaruit de
 * logica wordt geprogrammeerd. Data wordt van hieruit
 * geïnjecteerd in de onderliggen 'domme' componenten.
 * Vanuit de domme componenten worden gebruikers interactie
 * ontvangen en hierop wordt vanuit dit component een vervolg
 * actie ondernomen.
 */
@Component({
  selector: 'admin-modules',
  templateUrl: './admin-modules.component.html',
  styleUrls: ['./admin-modules.component.css']
})
export class AdminModulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
