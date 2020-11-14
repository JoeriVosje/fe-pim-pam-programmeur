import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Answer, Screen } from '../screens-overzicht/screen-item/screen-item.model';

@Component({
  selector: 'scherm-toevoegen',
  templateUrl: './scherm-toevoegen.component.html',
  styleUrls: ['./scherm-toevoegen.component.css']
})
export class SchermToevoegenComponent implements OnInit {

  @Output()
  public screenAdded: EventEmitter<Screen> = new EventEmitter<Screen>();

  @Input() public moduleId: string;

  constructor() {
  }

  screenForm: FormGroup;

  ngOnInit(): void {
    this.screenForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      theory: new FormControl(null, []),
      question: new FormControl(null, []),
      questionA: new FormControl(null, [Validators.required]),
      questionB: new FormControl(null, [Validators.required]),
      questionC: new FormControl(null, [Validators.required]),
      questionD: new FormControl(null, [Validators.required]),
      feedback: new FormControl(null, [Validators.required]),
      skippable: new FormControl(null, []),
      correctAnswer: new FormControl(null, [Validators.required])
    });
  }

  public addScreen(): void {
    if (this.screenForm.invalid) {
      alert('Graag alle velden invullen.');
      return;
    }

    const answersInput: Array<Answer> = this.getAnswersInput(this.screenForm.controls.correctAnswer.value);
    console.log(this.screenForm.controls.skippable.value);
    const product: Screen = {
      title: this.screenForm.controls.title.value,
      theory: this.screenForm.controls.theory.value,
      question: this.screenForm.controls.question.value,
      answers: answersInput,
      hint: this.screenForm.controls.feedback.value,
      skippable: this.screenForm.controls.skippable.value === true,
      moduleId: this.moduleId
    };
    console.log(product);
    this.screenAdded.emit(product);
  }

  private getAnswersInput(type: string): Array<Answer> {
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

}
