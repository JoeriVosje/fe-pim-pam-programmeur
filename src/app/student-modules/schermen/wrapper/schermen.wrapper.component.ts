import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Question } from '../../models/question.model';
import { StudentModulesNavigation } from '../../student-modules.navigation';
import { StudentModulesService } from '../../student-modules.service';

@Component({
  selector: 'student-schermen-wrapper',
  templateUrl: './schermen.wrapper.component.html'
})
export class SchermenWrapperComponent implements OnInit, OnDestroy {

  public questions: Question[];
  public isLoading: boolean;

  private readonly subscription: Subscription = new Subscription();

  constructor(
    private readonly navigatie: StudentModulesNavigation,
    private readonly service: StudentModulesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadQuestions();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public next(): void {

  }

  // public getQuestion(): Question {
  //   return this.questions[0];
  // }

  private loadQuestions(): void {
    this.subscription.add(
      this.service.getQuestions()
        .subscribe({
          next: questions => this.questions = questions,
          error: err => {
            console.log(err);
            this.isLoading = false;
          },
          complete: () => this.isLoading = false
        })
    );
  }
}
