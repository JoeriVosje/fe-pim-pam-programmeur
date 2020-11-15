import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartModule } from '../start.module';
import { StartWrapperComponent } from './start.wrapper.component';


@NgModule({
  declarations: [StartWrapperComponent],
  exports: [StartWrapperComponent],
  imports: [
    CommonModule,
    StartModule
  ]
})
export class StartWrapperModule { }
