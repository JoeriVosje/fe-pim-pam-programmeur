import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchermenWrapperComponent } from './schermen/wrapper/schermen.wrapper.component';
import { SchermenWrapperModule } from './schermen/wrapper/schermen.wrapper.module';
import { StartWrapperComponent } from './start/wrapper/start.wrapper.component';
import { StartWrapperModule } from './start/wrapper/start.wrapper.module';
import { StudentModulesComponent } from './student-modules.component';
import { StudentModulesNavigation } from './student-modules.navigation';


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
      path: StudentModulesNavigation.START,
      pathMatch: 'full',
      component: StartWrapperComponent,
      data: {
        breadCrumbs: [{ name: 'Overzicht', route: 'student' }]
      }
    },
    {
      path: StudentModulesNavigation.SCHERMEN,
      component: SchermenWrapperComponent
    },
    {
      path: '**',
      redirectTo: StudentModulesNavigation.START
    }
  ];
}