import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminModulesComponent } from './admin-modules.component';
import { ModulesOverzichtComponent } from './modules-overzicht/modules-overzicht.component';
import { ModulesToevoegenComponent } from './modules-toevoegen/modules-toevoegen.component';


@NgModule({
  declarations: [
    AdminModulesComponent,
    ModulesOverzichtComponent,
    ModulesToevoegenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AdminModulesComponent]
})
export class AdminModulesModule { }
