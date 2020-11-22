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

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly modal: MatDialog,
    private readonly overlayService: OverlayService) {
    this.answerForm = formBuilder.group({
      options: ['', Validators.required]
    });
  }

  public onSkip(): void  {
    const modal = this.modal.open(ModalComponent, {
      width: '368px',
      data: {
        title: 'Weet je het zeker?',
        text: 'Deze actie kun je niet terugdraaien.',
        buttonText1: 'Overslaan',
        buttonText2: 'Annuleren'
      }
    });

    modal.afterClosed().subscribe(result => {
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
      const modalSuccess = this.overlayService.open(SuccesOverlayComponent);
      this.toNext.emit();
      setTimeout(() => modalSuccess.close(), 3000);
    } else {
      const dialogRef: OverlayRefComponent = this.overlayService.open(ErrorOverlayComponent);
      setTimeout(() => { dialogRef.close(); }, 3000);
    }
  }

  private handleSkipFeedback(feedback: SkipFeedback): void {
    const modalSkip = this.overlayService.open(SkipOverlayComponent);
    setTimeout(() => modalSkip.close(), 3000);
  }

  private clearState(): void {
    this.answerForm.get('options').setValue('');
    this.submitted = false;
  }
}
