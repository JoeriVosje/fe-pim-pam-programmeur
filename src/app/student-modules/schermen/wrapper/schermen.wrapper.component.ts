import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import * as moment from 'moment';
import {take} from 'rxjs/operators';
import { Result } from '../../models/result.model';
import {Feedback, Screen} from '../../models/screen.model';
import { StudentModulesNavigation } from '../../student-modules.navigation';
import { StudentModulesService } from '../../student-modules.service';

@Component({
  selector: 'student-schermen-wrapper',
  templateUrl: './schermen.wrapper.component.html'
})
export class SchermenWrapperComponent implements OnInit {

  public screens: Screen[];
  public currentScreen = 0;
  public isLoading: boolean;
  public answer: Result;
  public feedback: Feedback;

  constructor(
    private readonly navigation: StudentModulesNavigation,
    private readonly service: StudentModulesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.setupAnswer();
    this.loadScreens();
  }

  public sendAnswer(answerId: string): void {
    if (answerId) {
      this.answer.answerId = answerId;
      this.service.sendAnswer(this.answer)
      .pipe(take(1))
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
    this.service.getScreens()
      .pipe(take(1))
      .subscribe({
        next: screens => {
          this.screens = screens;
        },
        error: error => {
          console.log(error);
          this.isLoading = false;
        },
        complete: () => this.isLoading = false
      });
  }

  private toNext(): void {
    if (this.screens[this.currentScreen].lastScreen) {
      this.navigation.toStart();
    } else {
      this.currentScreen++;
      this.answer.startTime = moment.utc().inspect();
    }
  }

  private isLastScreen(): void {
    if (this.screens.length === this.currentScreen + 1) {
      this.screens[this.currentScreen].lastScreen = true;
    }
  }

  private setupAnswer(): void {
    this.answer = {
      answerId: '',
      sessionId: this.service.getSessionId(),
      userId: this.service.getUserId(),
      startTime: moment.utc().inspect(),
    };
  }
}
