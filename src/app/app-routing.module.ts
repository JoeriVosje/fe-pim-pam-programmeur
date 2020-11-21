import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: () =>
      import('./login-modules/login-modules.module')
        .then(theImport => theImport.LoginModulesModule)
  },
  {
    path: '', loadChildren: () =>
      import('./admin-home/admin-home.module')
        .then(theImport => theImport.AdminHomeModule)
  },
  {
    path: 'classes', loadChildren: () =>
      import('./admin-klassen/admin-klassen.module')
        .then(theImport => theImport.AdminKlassenModule)
  },
  {
    path: 'modules', loadChildren: () =>
      import('./admin-modules/admin-modules.module')
        .then(theImport => theImport.AdminModulesModule)
  },
  {
    path: 'student', loadChildren: () =>
      import('./student-modules/student-modules.module')
        .then(theImport => theImport.StudentModulesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
