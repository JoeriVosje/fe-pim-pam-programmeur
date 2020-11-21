import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SchermenQuestionModule } from './question/schermen-question.module';
import { SchermenComponent } from './schermen.component';
import { SchermenTheoryModule } from './theory/schermen-theory.module';


@NgModule({
  declarations: [SchermenComponent],
  exports: [SchermenComponent],
  imports: [
    CommonModule,
    SchermenQuestionModule,
    SchermenTheoryModule
  ]
})
export class SchermenModule { }
