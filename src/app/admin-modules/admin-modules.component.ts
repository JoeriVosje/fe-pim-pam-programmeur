import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from '../ppp-components/three-dot-button/menu-item.model';
import { AdminModulesService } from './admin-modules.service';
import { AdminScreensService } from './admin-screens.service';
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

  constructor(private readonly adminModuleService: AdminModulesService,
              private readonly adminScreensService: AdminScreensService,
              private router: Router) {
  }

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
          complete: () => console.log('Modules opgehaal.')
        })
    );
  }

  public menuItem(menuItem: MenuItem): void {
    if (menuItem.isRoute) {
      this.router.navigate([menuItem.routeOrID]);
    } else {
      // todo implement snackbar, loading and delete
    }
  }

  toevoegen(): void {
    this.router.navigate(['modules/add']);
  }
}
