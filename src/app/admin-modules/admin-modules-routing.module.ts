import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminModulesComponent } from './admin-modules.component';


const routes: Routes = [
  { path: '', component: AdminModulesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModulesRoutingModule { }
