import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../../../ppp-components/modal/modal.component';
import { Screen } from '../../models/screen.model';

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
        this.toNext();
      }
    });
  }

  public onNext(): void {
    this.submitted = true;
    if (this.answerForm.valid) {
      this.toNext();
      this.clearState();
    }
  }

  public toNext(): void {
    // console.log(this.answerForm.get(''));
    this.screen.lastScreen ? this.finished.emit() : this.nextScreen.emit();
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
