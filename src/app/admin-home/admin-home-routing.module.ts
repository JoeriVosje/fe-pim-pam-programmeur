import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WrapperComponent } from './sessies-overzicht/wrapper/wrapper.component';

const breadCrumpMap = new Map([
  [0, {name: 'Overzicht', route: 'home'}],
]);

const routes: Routes = [
  {path: '', component: WrapperComponent, data: {breadCrumbs: [breadCrumpMap.get(0)]}},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule {
}
