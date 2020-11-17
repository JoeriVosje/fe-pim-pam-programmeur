import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AdminModulesService } from '../admin-modules.service';
import { Answer, Screen } from '../schermen-overzicht/scherm-item/scherm-item.model';

@Component({
  selector: 'scherm-toevoegen',
  templateUrl: './scherm-toevoegen.component.html',
  styleUrls: ['./scherm-toevoegen.component.css']
})
export class SchermToevoegenComponent implements OnInit {

  @Output()
  public screenAdded: EventEmitter<Screen> = new EventEmitter<Screen>();

  @Output()
  public validationFailed: EventEmitter<string> = new EventEmitter<string>();

  @Input() public moduleId: string;
  public moduleName: string;

  constructor(private adminModulesService: AdminModulesService) {
  }

  screenForm: FormGroup;

  async ngOnInit(): Promise<void> {
    this.screenForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      theory: new FormControl(null, []),
      question: new FormControl(null, []),
      questionA: new FormControl(null, []),
      questionB: new FormControl(null, []),
      questionC: new FormControl(null, []),
      questionD: new FormControl(null, []),
      feedback: new FormControl(null, []),
      skippable: new FormControl(null, []),
      correctAnswer: new FormControl(null, [])
    });
    this.moduleName = await this.adminModulesService.getModule(this.moduleId).toPromise().then(value => value.name);
  }

  public validMultipleChoiceAnswers(): boolean{
    return !(this.isEmpty(this.screenForm.controls.questionA.value) ||
      this.isEmpty(this.screenForm.controls.questionB.value ) ||
        this.isEmpty(this.screenForm.controls.questionC.value) ||
          this.isEmpty(this.screenForm.controls.questionD.value) ||
            this.isEmpty(this.screenForm.controls.correctAnswer.value));
    }

  public isEmpty(input: string): boolean {
    return !(typeof input !== undefined && input);
  }
  public addScreen(): void {
    if (this.screenForm.invalid) {
      this.validationFailed.emit('Titel is verplicht');
      return;
    }
    if (this.isEmpty(this.screenForm.controls.question.value)) {
        if (this.isEmpty(this.screenForm.controls.theory.value)) {
          this.validationFailed.emit('Als de vraag leeg is, is de theorie verplicht.');
          return;
        }
      }
    if (this.isEmpty(this.screenForm.controls.theory.value)) {
      if (this.isEmpty(this.screenForm.controls.question.value)) {
          this.validationFailed.emit('Als de theorie leeg is, is de vraag verplicht.');
          return;
        }

    }
    if (!this.isEmpty(this.screenForm.controls.question.value )){
      if (!this.validMultipleChoiceAnswers()){
        this.validationFailed.emit('Selecteer het correcte antwoord.');
        return;
      }
    }

    const answersInput: Array<Answer> = this.getAnswersInput(this.screenForm.controls.correctAnswer.value);
    const product: Screen = {
      title: this.screenForm.controls.title.value,
      theory: this.screenForm.controls.theory.value,
      question: this.screenForm.controls.question.value,
      answers: answersInput,
      hint: this.screenForm.controls.feedback.value,
      skippable: this.screenForm.controls.skippable.value === true,
      moduleId: this.moduleId
    };
    this.screenAdded.emit(product);
  }

  private getAnswersInput(type: string): Array<Answer> {
    if (this.screenForm.controls.question.value === null){
      return;
    }
    return [
      {
        description: this.screenForm.controls.questionA.value,
        isCorrectAnswer: type === 'A'
      },
      {
        description: this.screenForm.controls.questionB.value,
        isCorrectAnswer: type === 'B'
      },
      {
        description: this.screenForm.controls.questionC.value,
        isCorrectAnswer: type === 'C'
      },
      {
        description: this.screenForm.controls.questionD.value,
        isCorrectAnswer: type === 'D'
      }
    ];
  }

  getTitle(): string {
    return (this.moduleName !== null && this.moduleName !== undefined ? `${this.moduleName} - ` : '') + 'Scherm Toevoegen';
  }

}
