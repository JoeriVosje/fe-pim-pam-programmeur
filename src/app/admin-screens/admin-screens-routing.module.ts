import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminScreensComponent } from './admin-screens.component';

const routes: Routes = [
  { path: '', component: AdminScreensComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminScreensRoutingModule { }
