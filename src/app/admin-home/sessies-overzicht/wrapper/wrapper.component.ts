import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AdminHomeService } from '../../admin-home.service';
import { Sessie } from '../sessies-item/sessies-item.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit, OnDestroy {
  public sessies: Sessie[];

  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly adminHomeService: AdminHomeService) {
  }

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
