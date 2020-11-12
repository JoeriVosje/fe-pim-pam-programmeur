import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginModulesComponent } from './login-modules.component';


@NgModule({
  declarations: [
    LoginModulesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoginModulesComponent]
})
export class LoginModulesModule { }
