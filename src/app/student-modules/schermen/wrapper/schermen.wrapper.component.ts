import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import * as moment from 'moment';
import { Result } from '../../models/result.model';
import {Feedback, Screen} from '../../models/screen.model';
import { StudentModulesNavigation } from '../../student-modules.navigation';
import { StudentModulesService } from '../../student-modules.service';

@Component({
  selector: 'student-schermen-wrapper',
  templateUrl: './schermen.wrapper.component.html'
})
export class SchermenWrapperComponent implements OnInit, OnDestroy {

  public screens: Screen[];
  public currentScreen = 0;
  public isLoading: boolean;
  public result: Result;
  public feedback: Feedback;

  private readonly subscription: Subscription = new Subscription();

  constructor(
    private readonly navigation: StudentModulesNavigation,
    private readonly service: StudentModulesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.setUpResult();
    this.loadScreens();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public sendResult(answer: string): void {
    if (answer) {
      this.result.answerId = answer;
      this.service.saveResult(this.result)
      .subscribe({
        next: feedback => this.feedback = feedback,
        error: err => console.log(err)
      });
    }
  }

  public skip(): void {
    // to do send to skip
    console.log('Skip question');
  }

  public getScreen(): Screen {
    this.isLastScreen();
    return this.screens[this.currentScreen];
  }

  private loadScreens(): void {
    this.subscription.add(
      this.service.getScreens()
        .subscribe({
          next: screens => {
            this.screens = screens;
          },
          error: error => {
            console.log(error);
            this.isLoading = false;
          },
          complete: () => this.isLoading = false
        })
    );
  }

  private toNext(): void {
    if (this.screens[this.currentScreen].lastScreen) {
      this.navigation.toStart();
    }
    this.result.startTime = moment.utc().inspect();
    this.currentScreen++;
  }

  private isLastScreen(): void {
    if (this.screens.length === this.currentScreen + 1) {
      this.screens[this.currentScreen].lastScreen = true;
    }
  }

  private setUpResult(): void {
    this.result = {
      answerId: '',
      sessionId: this.service.getSessionId(),
      userId: this.service.getUserId(),
      startTime: moment.utc().inspect(),
    };
  }
}
