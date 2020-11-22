import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Feedback, Screen } from '../../models/screen.model';
import { SchermenQuestionService } from './schermen-question.service';

@Component({
  selector: 'schermen-question',
  templateUrl: './schermen-question.component.html',
  styleUrls: ['./schermen-question.component.css']
})
export class SchermenQuestionComponent {

  @Input() public screen: Screen;
  @Output() public sendAnswer = new EventEmitter<string>();
  @Output() public skip = new EventEmitter<void>();
  @Output() public toNext = new EventEmitter<void>();

  public answerForm: FormGroup;
  public answerId: string;
  public alphabet = 'ABCD';
  public submitted = false;
  public correctAnswer: string;
  public wrongAnswer: string;
  public canNavigateToNext = false;

  private _feedback: Feedback;

  @Input()
  public set feedback(feedback: Feedback) {
    if (feedback) {
      this._feedback = feedback;
      this.handleFeedback(this._feedback);
    }
  }

  public get feedback(): Feedback {
    return this._feedback;
  }

  constructor(private readonly service: SchermenQuestionService) {
    this.answerForm = this.service.initializeForm();
  }

  public onSkip(): void  {
    this.service.openOnSkipModal()
      .afterClosed()
      .subscribe(result => {
        if (result.data) {
          this.skip.emit();
        }
      });
  }

  public onNext(): void {
    if (this.canNavigateToNext) {
      this.canNavigateToNext = false;
      this.toNext.emit();
      this.clearState();
    } else {
      this.submit();
    }
  }

  private submit(): void {
    this.submitted = true;
    if (this.answerForm.valid) {
      this.answerId = this.answerForm.get('options').value.id;
      this.sendAnswer.emit(this.answerId);
    }
  }

  public showRequiredError(): boolean {
    return this.answerForm.get('options').invalid && this.submitted;
  }

  public showButton(): boolean {
    return !this.screen.question;
  }

  public getSkippableButtonText(): string {
    return this.screen.lastScreen ? 'Overslaan en afsluiten' : 'Overslaan';
  }

  public getNextButtonText(): string {
    return this.screen.lastScreen ? 'Module afsluiten' : 'Volgende';
  }

  private handleFeedback(feedback: Feedback): void {
    this.clearState();
    if (feedback.success === null) {
      this.service.openOverlay('skip')
      .subscribe(value => value ? this.openFeedbackModal(feedback) : null);
    } else if (feedback.success) {
      this.service.openOverlay('success')
        .subscribe(value => value ? this.toNext.emit() : null);
    } else {
      this.service.openOverlay('error')
        .subscribe(value => value ? this.openFeedbackModal(feedback) : null);
    }
  }

  private openFeedbackModal(feedback: Feedback): void {
    this.service.openFeedbackModal(feedback)
      .afterClosed()
      .subscribe(() => {
        this.correctAnswer = feedback.correctAnswerId;
        this.wrongAnswer = this.answerId;
        this.canNavigateToNext = true;
      });
  }

  private clearState(): void {
    this.answerForm.get('options').setValue('');
    this.submitted = false;
  }
}
