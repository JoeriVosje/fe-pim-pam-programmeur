import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EditorModule } from '@tinymce/tinymce-angular';
import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { AdminModulesRoutingModule } from './admin-modules-routing.module';
import { AdminModulesComponent } from './admin-modules.component';
import { ModulesBewerkenComponent } from './modules-bewerken/modules-bewerken.component';
import { ModulesBewerkenWrapperComponent } from './modules-bewerken/wrapper/modules-bewerken.wrapper.component';
import { ModulesItemComponent } from './modules-overzicht/modules-item/modules-item.component';
import { ModulesOverzichtComponent } from './modules-overzicht/modules-overzicht.component';
import { ModulesScreensComponent } from './modules-screens/modules-screens.component';
import { SchermToevoegenComponent } from './modules-screens/scherm-toevoegen/scherm-toevoegen.component';
import { ScreenItemComponent } from './modules-screens/screens-overzicht/screen-item/screen-item.component';
import { ScreensOverzichtComponent } from './modules-screens/screens-overzicht/screens-overzicht.component';
import { ModulesToevoegenComponent } from './modules-toevoegen/modules-toevoegen.component';
import { ModulesToevoegenWrapperComponent } from './modules-toevoegen/wrapper/modules-toevoegen.wrapper.component';


@NgModule({
  declarations: [
    AdminModulesComponent,
    ModulesOverzichtComponent,
    ModulesToevoegenComponent,
    ModulesToevoegenWrapperComponent,
    ModulesItemComponent,
    ScreensOverzichtComponent,
    ScreenItemComponent,
    ModulesScreensComponent,
    ModulesBewerkenComponent,
    SchermToevoegenComponent,
    ModulesBewerkenComponent,
    ModulesBewerkenWrapperComponent
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
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    EditorModule
  ],
  exports: [AdminModulesComponent]
})
export class AdminModulesModule { }
