import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ModalComponent } from '../../../ppp-components/modal/modal.component';
import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';
import { PppSnackerService } from '../../../ppp-services/ppp-snacker.service';
import { AdminModulesService } from '../../admin-modules.service';
import { AdminScreensService } from '../../admin-screens.service';
import { Screen } from '../scherm-item/scherm-item.model';

@Component({
  selector: 'scherm-overzicht-wrapper',
  templateUrl: './scherm-overzicht.wrapper.component.html',
  styleUrls: ['./scherm-overzicht.wrapper.component.css']
})
export class SchermOverzichtWrapperComponent implements OnInit, OnDestroy {


  moduleId: string;
  public screens: Screen[] = [];
  public loaded = false;
  private readonly subscription: Subscription = new Subscription();

  public moduleName: string;

  constructor(private service: AdminScreensService,
              private moduleService: AdminModulesService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: PppSnackerService,
              private readonly modal: MatDialog) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }


  async ngOnInit(): Promise<void> {
    this.moduleId = this.route.snapshot.paramMap.get('id');
    this.moduleName = await this.moduleService.getModule(this.moduleId).toPromise().then(value => value.name);
    this.getScreens();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  reOrderScreens(screens: Screen[]): void {
    const orderedList: Array<string> = [];
    screens.map(screen => {
      orderedList.push(screen.id);
    });
    this.service.reOrderScreen({componentIds: orderedList}).subscribe({
      error: error => this.snackBar.showErGingIetsMis(error),
      complete: () => {
        this.router.navigate([`modules/${this.moduleId}/screens`]);
        this.snackBar.showBewerkt('Volgorde');
      }
    });
  }

  toevoegen(): void {
    this.router.navigate([`modules/${this.moduleId}/screens/create`]);
  }

  verwijderen(menuItem: MenuItem): void {
    const modal = this.modal.open(ModalComponent, {
      width: '368px',
      data: {
        title: 'Weet je het zeker?',
        text: 'Wet je zeker dat je deze scherm wilt verwijderen?',
        buttonText1: 'Verwijderen',
        buttonText2: 'Annuleren'
      }
    });

    modal.afterClosed().subscribe(result => {
      if (result?.data) {
        this.service.deleteScreen(menuItem.routeOrID).subscribe({
          error: error => this.snackBar.showErGingIetsMis(error),
          complete: () => {
            this.router.navigate([this.router.url]);
            this.snackBar.showVerwijderd('Scherm');
          }
        });
      }
    });
  }

  public getScreens(): void {
    this.subscription.add(
      this.service.getScreens(this.moduleId)
        .subscribe({
          next: screens => {
            this.loaded = true;
            this.screens = screens;
          },
          error: error => this.snackBar.showErGingIetsMis(error)
        })
    );
  }
}
