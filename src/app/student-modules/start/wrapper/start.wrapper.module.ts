import { NgModule } from '@angular/core';

import { StartModule } from '../start.module';
import { StartWrapperComponent } from './start.wrapper.component';


@NgModule({
  declarations: [StartWrapperComponent],
  exports: [StartWrapperComponent],
  imports: [
    StartModule
  ]
})
export class StartWrapperModule { }
