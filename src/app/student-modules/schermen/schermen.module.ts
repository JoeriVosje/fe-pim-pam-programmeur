import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SchermenComponent } from './schermen.component';



@NgModule({
  declarations: [SchermenComponent],
  exports: [SchermenComponent],
  imports: [
    CommonModule
  ]
})
export class SchermenModule { }
