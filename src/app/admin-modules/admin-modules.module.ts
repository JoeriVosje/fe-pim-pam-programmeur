import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EditorModule } from '@tinymce/tinymce-angular';
import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { AdminModulesRoutingModule } from './admin-modules-routing.module';
import { AdminModulesComponent } from './admin-modules.component';
import { ModulesBewerkenComponent } from './modules-bewerken/modules-bewerken.component';
import { ModulesBewerkenWrapperComponent } from './modules-bewerken/wrapper/modules-bewerken.wrapper.component';
import { ModulesItemComponent } from './modules-overzicht/modules-item/modules-item.component';
import { ModulesOverzichtComponent } from './modules-overzicht/modules-overzicht.component';
import { ModulesToevoegenComponent } from './modules-toevoegen/modules-toevoegen.component';
import { ModulesToevoegenWrapperComponent } from './modules-toevoegen/wrapper/modules-toevoegen.wrapper.component';
import { SchermToevoegenComponent } from './scherm-toevoegen/scherm-toevoegen.component';
import { SchermToevoegenWrapperComponent } from './scherm-toevoegen/wrapper/scherm-toevoegen.wrapper.component';
import { SchermItemComponent } from './schermen-overzicht/scherm-item/scherm-item.component';
import { SchermenOverzichtComponent } from './schermen-overzicht/schermen-overzicht.component';
import { SchermOverzichtWrapperComponent } from './schermen-overzicht/wrapper/scherm-overzicht.wrapper.component';


@NgModule({
  declarations: [
    AdminModulesComponent,
    ModulesOverzichtComponent,
    ModulesToevoegenComponent,
    ModulesToevoegenWrapperComponent,
    ModulesItemComponent,
    SchermenOverzichtComponent,
    SchermItemComponent,
    ModulesBewerkenComponent,
    SchermToevoegenComponent,
    SchermToevoegenWrapperComponent,
    SchermOverzichtWrapperComponent,
    ModulesBewerkenComponent,
    ModulesBewerkenWrapperComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    PppComponentsModule,
    MatProgressBarModule,
    ScrollingModule,
    AdminModulesRoutingModule,
    DragDropModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatListModule,
    DragDropModule,
    EditorModule,
    MatRadioModule,
  ],
  exports: [AdminModulesComponent]
})
export class AdminModulesModule {
}
