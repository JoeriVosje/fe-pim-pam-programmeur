import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { AdminModulesComponent } from './admin-modules.component';
import { ModulesItemComponent } from './modules-overzicht/modules-item/modules-item.component';
import { ModulesOverzichtComponent } from './modules-overzicht/modules-overzicht.component';
import { ModulesToevoegenComponent } from './modules-toevoegen/modules-toevoegen.component';


@NgModule({
  declarations: [
    AdminModulesComponent,
    ModulesOverzichtComponent,
    ModulesToevoegenComponent,
    ModulesItemComponent
  ],
    imports: [
        CommonModule,
        PppComponentsModule
    ],
  exports: [AdminModulesComponent]
})
export class AdminModulesModule { }
