import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Screen } from '../models/screen.model';

@Component({
  selector: 'student-schermen',
  templateUrl: './schermen.component.html',
  styleUrls: ['./schermen.component.css']
})
export class SchermenComponent {

  @Input() public screen: Screen;
  @Output() public nextScreen = new EventEmitter<void>();
  @Output() public finished = new EventEmitter<void>();

  public answerForm: FormGroup;
  public alphabet = 'ABCD';
  public submitted = false;

  constructor(formBuilder: FormBuilder) {
    this.answerForm = formBuilder.group({
      options: ['', Validators.required]
    });
  }

  public onNext(): void {
    this.submitted = true;
    if(this.answerForm.valid) {
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

  public getAnswerText(letter: number, answer: string): string {
    return `${this.alphabet[letter]}. ${answer}`;
  }

  private clearState(): void {
    this.answerForm.get('options').setValue('');
    this.submitted = false;
  }
}
