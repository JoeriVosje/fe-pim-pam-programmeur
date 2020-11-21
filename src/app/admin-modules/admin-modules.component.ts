import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../ppp-components/three-dot-button/menu-item.model';
import { PppSnackerService } from '../ppp-services/ppp-snacker.service';
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
export class AdminModulesComponent implements OnInit {

  public modules: Module[] = [];
  public loaded;

  isValid = (module: Module) => {
    return this.isOpen(module);
  }

  constructor(private readonly adminModuleService: AdminModulesService,
              private readonly adminScreensService: AdminScreensService,
              private router: Router,
              private snackBar: PppSnackerService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getModules();
  }

   public async getModules(): Promise<void> {
     try {
       this.modules = await this.adminModuleService.getModules().toPromise();
     } catch (e) {
       this.snackBar.showErGingIetsMis(e);
       this.loaded = true;
     }
     this.loaded = true;
   }

  public deleteModule(moduleId: string): void {
    this.adminModuleService.deleteModule(moduleId)
      .subscribe({
        error: error => {
          if (error.error.errors[0].includes('Classroom')) {
            this.snackBar.showError('Verwijder eerst de classroom gekoppeld aan de module.');
            return;
          }
          this.snackBar.showErGingIetsMis(error);
        },
        complete: () => {
          this.snackBar.showVerwijderd('Module');
          this.router.navigate([this.router.url]);
          this.getModules();
        }
      });
  }

  public menuItem(menuItem: MenuItem): void {
    if (menuItem.isRoute) {
      this.router.navigate([menuItem.routeOrID]);
    } else {
      this.deleteModule(menuItem.routeOrID);
    }
  }

  toevoegen(): void {
    this.router.navigate(['modules/add']);
  }

  openCloseSession(module: Module): void {
    console.log(module.status);
    if (module.isOpen) {
      this.adminModuleService.closeSession(module.id)
        .subscribe({
          error: error => this.snackBar.showErGingIetsMis(error),
          complete: () => {
            this.snackBar.showSuccess('Module is gesloten.');
            this.modules.find(value => value.id === module.id).status = 'closed';
          }
        });
    } else {
      this.adminModuleService.openSession(module.id)
        .subscribe({
          error: error => {
            if (error.status === 400) {
              if (error.error.errors[0].includes('components')) {
                this.snackBar.showError('Voeg eerst een scherm toe');
                return;
              }
            }
            this.snackBar.showErGingIetsMis(error);
          },
          complete: () => {
            this.snackBar.showSuccess('Module is geopend.');
            this.modules.find(value => value.id === module.id).status = 'open';
          }
        });
    }
  }

  isOpen(module: Module): boolean {
    console.log(module);
    console.log(this.modules);
    return this.modules.find(value => value.id === module.id).isOpen;
  }
}
