import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { PppComponentsModule } from '../../ppp-components/ppp-components.module';
import { EscapeHtmlPipe } from './pipe/keep-html.pipe';
import {SchermenQuestionModule} from './question/schermen-question.module';
import { SchermenComponent } from './schermen.component';
import { SchermenQuestionComponent } from './question/schermen-question.component';
import { SchermenModalComponent } from './schermen-modal/schermen-modal.component';



@NgModule({
  declarations: [
    EscapeHtmlPipe,
    SchermenComponent,
    SchermenModalComponent
  ],
  exports: [SchermenComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PppComponentsModule,
    SchermenQuestionModule
  ]
})
export class SchermenModule { }
