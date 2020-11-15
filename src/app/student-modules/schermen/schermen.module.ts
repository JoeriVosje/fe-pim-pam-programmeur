import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
    PppComponentsModule
  ]
})
export class SchermenModule { }
