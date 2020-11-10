import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';

import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { AdminModulesRoutingModule } from './admin-modules-routing.module';
import { AdminModulesComponent } from './admin-modules.component';
import { ModulesBewerkenComponent } from './modules-bewerken/modules-bewerken.component';
import { ModulesItemComponent } from './modules-overzicht/modules-item/modules-item.component';
import { ModulesOverzichtComponent } from './modules-overzicht/modules-overzicht.component';
import { ModulesScreensComponent } from './modules-screens/modules-screens.component';
import { SchermToevoegenComponent } from './modules-screens/scherm-toevoegen/scherm-toevoegen.component';
import { ScreenItemComponent } from './modules-screens/screens-overzicht/screen-item/screen-item.component';
import { ScreensOverzichtComponent } from './modules-screens/screens-overzicht/screens-overzicht.component';
import { ModulesToevoegenComponent } from './modules-toevoegen/modules-toevoegen.component';


@NgModule({
  declarations: [
    AdminModulesComponent,
    ModulesOverzichtComponent,
    ModulesToevoegenComponent,
    ModulesItemComponent,
    ScreensOverzichtComponent,
    ScreenItemComponent,
    ModulesScreensComponent,
    ModulesBewerkenComponent,
    SchermToevoegenComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PppComponentsModule,
    ScrollingModule,
    AdminModulesRoutingModule,
    DragDropModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
  ],
  exports: [AdminModulesComponent]
})
export class AdminModulesModule { }
