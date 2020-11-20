import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { PppComponentsModule } from '../../ppp-components/ppp-components.module';
import { EscapeHtmlPipe } from './pipe/keep-html.pipe';
import { SchermenComponent } from './schermen.component';



@NgModule({
  declarations: [
    SchermenComponent,
    EscapeHtmlPipe
  ],
  exports: [SchermenComponent],
  imports: [
    CommonModule,
    PppComponentsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class SchermenModule { }
