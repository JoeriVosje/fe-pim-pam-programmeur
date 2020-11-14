import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Screen } from '../screens-overzicht/screen-item/screen-item.model';
import {log} from 'util';


@Component({
  selector: 'scherm-toevoegen',
  templateUrl: './scherm-toevoegen.component.html',
  styleUrls: ['./scherm-toevoegen.component.css']
})
export class SchermToevoegenComponent implements OnInit {

  @Output()
  public screenAdded: EventEmitter<Screen> = new EventEmitter<Screen>();

  constructor() { }

  screenForm: FormGroup;

  ngOnInit(): void {
    this.screenForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      theory: new FormControl(null, [Validators.required]),
      question: new FormControl(null, [Validators.required]),
      questionA: new FormControl(null, [Validators.required]),
      questionB: new FormControl(null, [Validators.required]),
      questionC: new FormControl(null, [Validators.required]),
      questionD: new FormControl(null, [Validators.required]),
      feedback: new FormControl(null, [Validators.required]),
      skippable: new FormControl(null, []),
      correctAnswer:  new FormControl(null, [Validators.required])
    });
  }




  public addScreen(): void {
    console.log('sent');
    console.log(this.screenForm);
    if (this.screenForm.invalid) {
      return;
    }
    const product: Screen = {
      title: this.screenForm.controls.title.value,
      theory: this.screenForm.controls.theory.value,
      correctAnswer: this.screenForm.controls.correctAnswer.value,
      question: this.screenForm.controls.question.value,
      questionA: this.screenForm.controls.questionA.value,
      questionB: this.screenForm.controls.questionB.value,
      questionC: this.screenForm.controls.questionC.value,
      questionD: this.screenForm.controls.questionD.value,
      feedback: this.screenForm.controls.feedback.value,
      skippable: this.screenForm.controls.skippable.value
    };
    console.log(product);
    this.screenAdded.emit(product);
  }

  toevoegen(): void {
    return;
  }
}
