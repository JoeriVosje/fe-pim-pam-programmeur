import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { LoginModulesComponent } from './login-modules.component';
import { LoginModulesWrapperComponent } from './wrapper/login-modules.wrapper.component';

const routes: Routes = [
  {
    path: 'login', component: LoginModulesWrapperComponent,
    data: {},
  }
];

@NgModule({
  declarations: [
    LoginModulesComponent,
    LoginModulesWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PppComponentsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [LoginModulesComponent]
})
export class LoginModulesModule {
}

