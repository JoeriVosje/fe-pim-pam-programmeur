import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AdminModulesService } from './admin-modules.service';
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
export class AdminModulesComponent implements OnInit, OnDestroy {

  public modules: Module[] = [];

  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly adminModuleService: AdminModulesService) { }

  ngOnInit(): void {
    this.getModules();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getModules(): void {
    this.subscription.add(
      this.adminModuleService.getModules()
      .subscribe({
        next: modules => this.modules = modules,
        error: error => console.log(error),
        complete: () => console.log('complete')
      })
    );
  }
}
