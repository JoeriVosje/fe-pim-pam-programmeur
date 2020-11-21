import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {PppComponentsModule} from '../../../ppp-components/ppp-components.module';

import { EscapeHtmlPipe } from './pipe/keep-html.pipe';
import { SchermenTheoryComponent } from './schermen-theory.component';



@NgModule({
  declarations: [
    EscapeHtmlPipe,
    SchermenTheoryComponent
  ],
  exports: [SchermenTheoryComponent],
  imports: [
    CommonModule,
    PppComponentsModule
  ]
})
export class SchermenTheoryModule { }
