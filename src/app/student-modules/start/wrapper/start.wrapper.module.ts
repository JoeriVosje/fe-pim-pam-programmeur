import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartModule } from '../start.module';
import { StartWrapperComponent } from './start.wrapper.component';


@NgModule({
  declarations: [StartWrapperComponent],
  exports: [StartWrapperComponent],
  imports: [
    StartModule,
    CommonModule
  ]
})
export class StartWrapperModule { }
