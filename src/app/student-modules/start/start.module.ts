import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PppComponentsModule } from '../../ppp-components/ppp-components.module';
import { StartComponent } from './start.component';


@NgModule({
  declarations: [StartComponent],
  exports: [StartComponent],
  imports: [
    CommonModule,
    PppComponentsModule
  ]
})
export class StartModule { }
