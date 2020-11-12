import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AdminHomeService } from './admin-home.service';
import { Sessie } from './sessies-overzicht/sessies-item/sessies-item.model';


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
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  public sessies: Sessie[] = [];

  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly adminHomeService: AdminHomeService) { }

  ngOnInit(): void {
    this.getSessies();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  
  public getSessies(): void {
    this.subscription.add(
      this.adminHomeService.getSessies()
        .subscribe({
          next: sessies => this.sessies = sessies,
          error: error => console.log(error),
          complete: () => console.log('complete')
        })
    );
  }

}
