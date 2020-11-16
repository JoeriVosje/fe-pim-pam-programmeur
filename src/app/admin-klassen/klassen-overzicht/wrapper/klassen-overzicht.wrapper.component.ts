import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from 'src/app/ppp-components/three-dot-button/menu-item.model';
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
  private readonly subscription: Subscription = new Subscription();

  constructor(private klassenService: AdminKlassenService,
              private router: Router,
              private snackBar: PppSnackerService) {
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
          next: klassen => this.klassen = klassen,
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
      this.router.navigate([menuItem.routeOrID], {state: {klasNaam: menuItem.data}});
    } else {
      this.deleteClass(menuItem.routeOrID);
      // todo implement loading
    }
  }

  public deleteClass(id: string): void {
    this.klassenService.deleteKlas(id)
      .subscribe({
        error: error => this.snackBar.showErGingIetsMis(error),
        complete: () => {
          this.snackBar.showVerwijderd('Klas');
          this.router.navigate([this.router.url]);
        }
      });
  }
}
