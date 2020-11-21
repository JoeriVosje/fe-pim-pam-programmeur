import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from 'src/app/ppp-components/three-dot-button/menu-item.model';
import { ModalComponent } from '../../../ppp-components/modal/modal.component';
import { PppSnackerService } from '../../../ppp-services/ppp-snacker.service';
import { AdminKlassenService } from '../../admin-klassen.service';
import { Klas } from '../../klassen-item.model';

/**
 * Dit is een zogenoemd 'dom' component. Dit component
 * wordt alleen gebruikt voor het tonen van ontvangen data
 * in een ui. Daarnaast stuurt het gebruikers interactie
 * naar het 'slimme' component.
 */
@Component({
  selector: 'klassen-overzicht-wrapper',
  templateUrl: './klassen-overzicht.wrapper.component.html',
  styleUrls: ['./klassen-overzicht.wrapper.component.css']
})
export class KlassenOverzichtWrapperComponent implements OnInit, OnDestroy {

  public klassen: Klas[] = [];
  public loaded = false;
  private readonly subscription: Subscription = new Subscription();

  constructor(private klassenService: AdminKlassenService,
              private router: Router,
              private snackBar: PppSnackerService,
              private readonly modal: MatDialog) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.klassenService.getKlassen()
        .subscribe({
          next: klassen => {
            this.klassen = klassen;
            this.loaded = true;
          },
          error: error => this.snackBar.showErGingIetsMis(error)
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toevoegenClicked(): void {
    this.router.navigate(['classes/add']);
  }

  public menuItemClicked(menuItem: MenuItem): void {
    if (menuItem.isRoute) {
      this.router.navigate([menuItem.routeOrID]);
    } else {
      this.deleteClass(menuItem.routeOrID);
      // todo implement loading
    }
  }

  public deleteClass(id: string): void {
    const modal = this.modal.open(ModalComponent, {
      width: '368px',
      data: {
        title: 'Weet je het zeker?',
        text: 'Wet je zeker dat je deze klas wilt verwijderen?',
        buttonText1: 'Verwijderen',
        buttonText2: 'Annuleren'
      }
    });

    modal.afterClosed().subscribe(result => {
      if (result?.data) {
        this.klassenService.deleteKlas(id)
          .subscribe({
            error: error => this.snackBar.showErGingIetsMis(error),
            complete: () => {
              this.snackBar.showVerwijderd('Klas');
              this.router.navigate([this.router.url]);
            }
          });
      }
    });
  }
}
