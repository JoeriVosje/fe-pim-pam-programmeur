import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchermenWrapperComponent } from './schermen/wrapper/schermen.wrapper.component';
import { SchermenWrapperModule } from './schermen/wrapper/schermen.wrapper.module';
import { StartWrapperComponent } from './start/wrapper/start.wrapper.component';
import { StartWrapperModule } from './start/wrapper/start.wrapper.module';
import { StudentModulesComponent } from './student-modules.component';
import { StudentModulesNavigatie } from './student-modules.navigatie';


@NgModule({
  declarations: [StudentModulesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StudentModulesModule.routes),
    SchermenWrapperModule,
    StartWrapperModule
  ]
})
export class StudentModulesModule {

  public static readonly routes: Routes = [
    {
      path: StudentModulesNavigatie.START,
      pathMatch: 'full',
      component: StartWrapperComponent
    },
    {
      path: StudentModulesNavigatie.SCHERMEN,
      component: SchermenWrapperComponent
    },
    {
      path: '**',
      redirectTo: StudentModulesNavigatie.START
    }
  ];
}