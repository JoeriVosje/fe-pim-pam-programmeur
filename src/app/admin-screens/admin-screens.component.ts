import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AdminScreensService } from './admin-screens.service';
import { Screen } from './screens-overzicht/screen-item/screen-item.model';


@Component({
  selector: 'admin-screens',
  templateUrl: './admin-screens.component.html',
  styleUrls: ['./admin-screens.component.css']
})
export class AdminScreensComponent implements OnInit, OnDestroy {

  public screens: Screen[] = [];

  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly adminScreensService: AdminScreensService) { }

  ngOnInit(): void {
    this.getScreens();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getScreens(): void {
    this.subscription.add(
      this.adminScreensService.getScreens()
        .subscribe({
          next: screens => this.screens = screens,
          error: error => console.log(error),
          complete: () => console.log('complete')
        })
    );
  }

}