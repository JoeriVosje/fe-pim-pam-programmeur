import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminModulesComponent } from './admin-modules.component';
import { ModulesBewerkenWrapperComponent } from './modules-bewerken/wrapper/modules-bewerken.wrapper.component';
import { ModulesScreensComponent } from './modules-screens/modules-screens.component';
import { ModulesToevoegenWrapperComponent } from './modules-toevoegen/wrapper/modules-toevoegen.wrapper.component';
import { SchermToevoegenWrapperComponent } from './screen-toevoegen/wrapper/scherm-toevoegen.wrapper.component';

const breadCrumpMap = new Map([
  [0, {name: 'Overzicht', route: 'modules'}],
  [1, {name: 'Toevoegen', route: 'modules/add'}],
  [2, {name: 'Bewerken', route: 'modules/:id/edit'}],
  [3, {name: 'Schermen', route: 'modules/:id/screens'}],
  [4, {name: 'Toevoegen', route: 'modules/:id/screens/create'}],
]);

const routes: Routes = [
  {
    path: '', component: AdminModulesComponent,
    data: {
      breadCrumbs: [breadCrumpMap.get(0)]
    }
  },
  {
    path: 'add', component: ModulesToevoegenWrapperComponent,
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(1)]
    }
  },
  {
    path: ':id/edit', component: ModulesBewerkenWrapperComponent,
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(2)]
    }
  },
  {
    path: ':id/screens', component: ModulesScreensComponent,
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(3)]
    }
  },
  {
    path: ':id/screens/create', component: SchermToevoegenWrapperComponent,
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(3), breadCrumpMap.get(4)]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModulesRoutingModule {
}
