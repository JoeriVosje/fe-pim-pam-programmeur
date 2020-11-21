import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Screen } from '../../models/screen.model';
import {SchermenModalComponent} from '../schermen-modal/schermen-modal.component';

@Component({
  selector: 'schermen-question',
  templateUrl: './schermen-question.component.html',
  styleUrls: ['./schermen-question.component.css']
})
export class SchermenQuestionComponent {

  @Input() public screen: Screen;
  @Output() public nextScreen = new EventEmitter<void>();
  @Output() public finished = new EventEmitter<void>();

  public answerForm: FormGroup;
  public alphabet = 'ABCD';
  public submitted = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly modal: MatDialog) {
    this.answerForm = formBuilder.group({
      options: ['', Validators.required]
    });
  }

  public onSkip(): void  {
    const dialogRef = this.modal.open(SchermenModalComponent, {
      width: '368px',
      data: {
        title: 'Titel',
        text: 'Dit is de modal',
        buttonText1: 'Overslaan',
        buttonText2: 'Annuleren'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public onNext(): void {
    this.submitted = true;
    if (this.answerForm.valid) {
      this.screen.lastScreen ? this.finished.emit() : this.nextScreen.emit();
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

  private clearState(): void {
    this.answerForm.get('options').setValue('');
    this.submitted = false;
  }
}
