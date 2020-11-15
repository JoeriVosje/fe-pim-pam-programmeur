import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {PppComponentsModule} from '../../ppp-components/ppp-components.module';

import { SchermenComponent } from './schermen.component';
import {EscapeHtmlPipe} from '../keep-html.pipe';



@NgModule({
  declarations: [SchermenComponent, EscapeHtmlPipe],
  exports: [SchermenComponent],
  imports: [
    CommonModule,
    PppComponentsModule
  ]
})
export class SchermenModule { }
