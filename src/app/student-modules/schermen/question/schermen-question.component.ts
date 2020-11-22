import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ErrorOverlayComponent } from '../../../ppp-components/error-overlay/error-overlay.component';
import { ModalComponent } from '../../../ppp-components/modal/modal.component';
import { OverlayService } from '../../../ppp-components/overlay/overlay.service';
import { OverlayRefComponent } from '../../../ppp-components/overlay/overlayRef.component';
import { SkipOverlayComponent } from '../../../ppp-components/skip-overlay/skip-overlay.component';
import { SuccesOverlayComponent } from '../../../ppp-components/succes-overlay/succes-overlay.component';
import { Feedback, Screen, SkipFeedback } from '../../models/screen.model';
import {FeedbackModalComponent} from './feedback-modal/feedback-modal.component';
import {SchermenQuestionService} from './schermen-question.service';

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
  public alphabet = 'ABCD';
  public submitted = false;
  public correctAnswer: string;
  public wrongAnswer: string;
  public canNavigateToNext: boolean;

  private _feedback: Feedback;
  private _skipFeedback: SkipFeedback;

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

  @Input()
  public set skipFeedback(skipFeedback: SkipFeedback) {
    if (skipFeedback) {
      this._skipFeedback = skipFeedback;
      this.handleSkipFeedback(this._skipFeedback);
    }
  }

  public get skipFeedback(): SkipFeedback {
    return this._skipFeedback;
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
          this.clearState();
        }
      });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.answerForm.valid) {
      const answer = this.answerForm.get('options').value.id;
      this.sendAnswer.emit(answer);
      this.clearState();
    }
  }

  private onNext(): void {
    if (this.canNavigateToNext) {
      this.toNext.emit();
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
    if (feedback.success) {
      this.service.openOverlay('success')
        .subscribe(value => value ? this.toNext.emit() : null);
    } else {
      this.service.openOverlay('error')
        .subscribe(value => value ? null : null);
    }
  }

  private handleSkipFeedback(feedback: SkipFeedback): void {
    this.service.openOverlay('skip')
      .subscribe(result => result ? this.openFeedbackModal(feedback) : null);
  }

  private openFeedbackModal(feedback: SkipFeedback): void {
    this.service.openFeedbackModal(feedback.description)
      .afterClosed()
      .subscribe(() => {
        this.correctAnswer = feedback.id;
        this.canNavigateToNext = true;
      });
  }

  private clearState(): void {
    this.answerForm.get('options').setValue('');
    this.submitted = false;
  }
}
