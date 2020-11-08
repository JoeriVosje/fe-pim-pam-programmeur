import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminModulesComponent } from './admin-modules.component';
import { ModulesScreensComponent } from './modules-screens/modules-screens.component';

const routes: Routes = [
  { path: '', component: AdminModulesComponent },
  { path: 'screens', component: ModulesScreensComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModulesRoutingModule { }
