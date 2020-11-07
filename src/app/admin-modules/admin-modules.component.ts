import { Component, OnInit } from '@angular/core';

import { Module } from './modules-overzicht/modules-item/modules-item.model';

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

  public modules: Module[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.modules.push({
        name: 'Module naam',
        status: true,
        dateAdded: '2020-11-07'
      });
    }
  }
}
