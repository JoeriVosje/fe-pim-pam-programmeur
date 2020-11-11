import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartComponent } from './start.component';


@NgModule({
  declarations: [StartComponent],
  exports: [StartComponent],
  imports: [
    CommonModule
  ]
})
export class StartModule { }
