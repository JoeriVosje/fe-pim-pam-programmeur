import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from 'src/app/ppp-components/three-dot-button/menu-item.model';
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

  constructor(private klassenService: AdminKlassenService, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.klassenService.getKlassen()
        .subscribe({
          next: klassen => this.klassen = klassen,
          error: error => console.log(error),
          complete: () => console.log('complete')
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
      this.router.navigate([menuItem.data], { state: { klasNaam : menuItem.extraDataLolFixLater }});
    } else {
      // todo implement delete classroom
    }
  }
}
