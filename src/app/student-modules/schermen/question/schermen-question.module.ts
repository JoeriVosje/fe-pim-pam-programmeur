import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { PppComponentsModule } from '../../../ppp-components/ppp-components.module';
import { FeedbackModalComponent } from './feedback-modal/feedback-modal.component';
import { SchermenQuestionComponent } from './schermen-question.component';



@NgModule({
  declarations: [SchermenQuestionComponent, FeedbackModalComponent],
  exports: [SchermenQuestionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    PppComponentsModule,
    ReactiveFormsModule
  ]
})
export class SchermenQuestionModule { }
