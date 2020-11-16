import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginGuard } from '../admin-login-guard';
import { KlassenOverzichtWrapperComponent } from './klassen-overzicht/wrapper/klassen-overzicht.wrapper.component';
import { KlassenStudentenOverzichtWrapperComponent } from './klassen-studenten-overzicht/klassen-studenten-overzicht-wrapper/klassen-studenten-overzicht-wrapper.component';
import { KlassenStudentenToevoegenWrapperComponent } from './klassen-studenten-toevoegen/klassen-studenten-toevoegen-wrapper/klassen-studenten-toevoegen-wrapper.component';
import { KlassenToevoegenWrapperComponent } from './klassen-toevoegen/wrapper/klassen-toevoegen.wrapper.component';


const breadCrumpMap = new Map([
  [0, {name: 'Overzicht', route: 'classes'}],
  [1, {name: 'Toevoegen', route: 'classes/add'}],
  [2, {name: 'Studenten', route: 'classes/:id/students'}],
  [3, {name: 'Toevoegen', route: 'classes/:id/students/add'}],
]);

const routes: Routes = [
  {path: '', component: KlassenOverzichtWrapperComponent, data: {breadCrumbs: [breadCrumpMap.get(0)]}, canActivate: [AdminLoginGuard]},
  {
    path: 'add', component: KlassenToevoegenWrapperComponent,
    canActivate: [AdminLoginGuard],
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(1)]
    }
  },
  {
    path: ':id/students', component: KlassenStudentenOverzichtWrapperComponent,
    canActivate: [AdminLoginGuard],
    data: {
      breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(2)]
    }
  },
  {
    path: ':id/students/add', component: KlassenStudentenToevoegenWrapperComponent,
    canActivate: [AdminLoginGuard],
    data: {
      breadCrumbs: [
        breadCrumpMap.get(0),
        breadCrumpMap.get(2),
        breadCrumpMap.get(3),
      ]
    }
  },

  // {
  //   path: ':id/edit', component: ModulesBewerkenWrapperComponent,
  //   data: {
  //     breadCrumbs: [breadCrumpMap.get(0), breadCrumpMap.get(2)]
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminKlassenRoutingModule {
}
