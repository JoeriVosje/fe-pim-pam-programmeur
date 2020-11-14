import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PppComponentsModule } from '../ppp-components/ppp-components.module';

import { LoginModulesComponent } from './login-modules.component';
import { LoginModulesWrapperComponent } from './wrapper/login-modules.wrapper.component';

// path declare
const routes: Routes = [
  {path: 'login', component: LoginModulesWrapperComponent, data: {}}
];

@NgModule({
  declarations: [
    LoginModulesComponent,
    LoginModulesWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PppComponentsModule
  ],
  exports: [LoginModulesComponent]
})
export class LoginModulesModule {
}

