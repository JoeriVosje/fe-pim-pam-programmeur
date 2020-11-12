import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModulesComponent } from './login-modules.component';

// path declare
const routes: Routes = [
  {path: 'login', component: LoginModulesComponent, data: {}}
];

@NgModule({
  declarations: [
    LoginModulesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [LoginModulesComponent]
})
export class LoginModulesModule {
}

