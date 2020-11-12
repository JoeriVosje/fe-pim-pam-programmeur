import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login-modules/login-modules.module').then(theImport => theImport.LoginModulesModule) },
  { path: '', loadChildren: () => import('./admin-modules/admin-modules.module').then(theImport => theImport.AdminModulesModule) },
  // todo Replace home import with import('./admin-home/admin-home.module').then(theImport => theImport.HomeModule)
  { path: 'home', loadChildren: () => import('./admin-modules/admin-modules.module').then(theImport => theImport.AdminModulesModule) },
  // todo Replace classes import with import('./admin-classes/admin-classes.module').then(theImport => theImport.ClassModule)
  { path: 'classes', loadChildren: () => import('./admin-modules/admin-modules.module').then(theImport => theImport.AdminModulesModule) },
  { path: 'modules', loadChildren: () => import('./admin-modules/admin-modules.module').then(theImport => theImport.AdminModulesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
