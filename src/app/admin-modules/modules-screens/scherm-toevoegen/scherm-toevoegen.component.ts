import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Screen } from '../screens-overzicht/screen-item/screen-item.model';


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
      theory: new FormControl(null, [Validators.required])
    });
  }




  public addScreen(): void {
    console.log('sent');
    if (this.screenForm.invalid) {
      return;
    }
    const product: Screen = {
      correctAnswer: '',
      feedback: '',
      question: '',
      questionA: '',
      questionB: '',
      questionC: '',
      questionD: '',
      theory: '',
      title: this.screenForm.controls.title.value

      // quantity: this.productForm.controls.quantity.value,
      // productName: this.productForm.controls.productName.value,
      // complete: false
    };
    console.log(product);
    this.screenAdded.emit(product);
  }

  toevoegen(): void {
    return;
  }
}
