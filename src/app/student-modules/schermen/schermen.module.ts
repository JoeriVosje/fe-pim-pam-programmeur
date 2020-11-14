import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {PppComponentsModule} from '../../ppp-components/ppp-components.module';

import { SchermenComponent } from './schermen.component';



@NgModule({
  declarations: [SchermenComponent],
  exports: [SchermenComponent],
  imports: [
    CommonModule,
    PppComponentsModule
  ]
})
export class SchermenModule { }
