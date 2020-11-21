import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginGuard } from '../admin-login-guard';
import { AdminModulesComponent } from './admin-modules.component';
import { ModulesBewerkenWrapperComponent } from './modules-bewerken/wrapper/modules-bewerken.wrapper.component';
import { ModulesToevoegenWrapperComponent } from './modules-toevoegen/wrapper/modules-toevoegen.wrapper.component';
import { SchermToevoegenWrapperComponent } from './scherm-toevoegen/wrapper/scherm-toevoegen.wrapper.component';
import { SchermOverzichtWrapperComponent } from './schermen-overzicht/wrapper/scherm-overzicht.wrapper.component';

const breadCrumpMap = new Map([
  [0, {name: 'Overzicht', route: 'modules'}],
  [1, {name: 'Toevoegen', route: 'modules/add'}],
  [2, {name: 'Bewerken', route: 'modules/:id/edit'}],
  [3, {name: 'Schermen', route: 'modules/:id/screens'}],
  [4, {name: 'Toevoegen', route: 'modules/:id/screens/create'}],
]);

const routes: Routes = [
  {
    path: 'modules', component: AdminModulesComponent,
    canActivate: [AdminLoginGuard],
    data: {
      breadCrumbs: [breadCrumpMap.get(0)],
    },
  },
  {
    path: 'add', component: ModulesToevoegenWrapperComponent,
    canActivate: [AdminLoginGuard],
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(1)],
    },
  },
  {
    path: ':id/edit', component: ModulesBewerkenWrapperComponent,
    canActivate: [AdminLoginGuard],
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(2)],
    },
  },
  {
    path: ':id/screens', component: SchermOverzichtWrapperComponent,
    canActivate: [AdminLoginGuard],
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(3)],
    },
  },
  {
    path: ':id/screens/create', component: SchermToevoegenWrapperComponent,
    canActivate: [AdminLoginGuard],
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(3), breadCrumpMap.get(4)],
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModulesRoutingModule {
}
