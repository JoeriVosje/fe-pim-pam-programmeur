import { NgModule } from '@angular/core';

import { SchermenModule } from '../schermen.module';
import { SchermenWrapperComponent } from './schermen.wrapper.component';


@NgModule({
  declarations: [SchermenWrapperComponent],
  exports: [SchermenWrapperComponent],
  imports: [
    SchermenModule
  ]
})
export class SchermenWrapperModule { }
