import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Screen } from '../../models/screen.model';
import { StudentModulesNavigation } from '../../student-modules.navigation';
import { StudentModulesService } from '../../student-modules.service';
import {PppSnackerService} from '../../../ppp-services/ppp-snacker.service';

@Component({
  selector: 'student-schermen-wrapper',
  templateUrl: './schermen.wrapper.component.html'
})
export class SchermenWrapperComponent implements OnInit, OnDestroy {

  public screens: Screen[];
  public currentScreen = 0;
  public isLoading: boolean;

  private readonly subscription: Subscription = new Subscription();

  constructor(
    private readonly navigatie: StudentModulesNavigation,
    private readonly service: StudentModulesService,
    private readonly snackBar: PppSnackerService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadScreens();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public next(): void {
    this.currentScreen++;
  }

  public finished(): void {
    this.navigatie.toStart();
  }

  public getScreen(): Screen {
    this.isLastScreen();
    return this.screens[this.currentScreen];
  }

  private loadScreens(): void {
    this.subscription.add(
      this.service.getScreens()
        .subscribe({
          next: screens => this.screens = screens,
          error: error => {
            console.log(error);
            this.isLoading = false;
          },
          complete: () => this.isLoading = false
        })
    );
  }

  private isLastScreen(): void {
    if (this.screens.length === this.currentScreen + 1) {
      this.screens[this.currentScreen].lastScreen = true;
    }
  }
}
