import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // todo Replace AdminModulesModule with LoginModule
    path: '', loadChildren: () =>
      import('./admin-modules/admin-modules.module')
        .then(theImport => theImport.AdminModulesModule)
  },
  {
    // todo Replace home import with import('./admin-home/admin-home.module').then(theImport => theImport.HomeModule)
    path: 'home', loadChildren: () =>
      import('./admin-home/admin-home.module')
        .then(theImport => theImport.AdminHomeModule)
  },
  {
    // todo Replace classes import with import('./admin-classes/admin-classes.module').then(theImport => theImport.ClassModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
