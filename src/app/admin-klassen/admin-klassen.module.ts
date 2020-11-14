import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { AdminKlassenRoutingModule } from './admin-klassen-routing.module';
import { KlassenItemComponent } from './klassen-overzicht/klassen-item/klassen-item.component';
import { KlassenOverzichtComponent } from './klassen-overzicht/klassen-overzicht.component';
import { KlassenOverzichtWrapperComponent } from './klassen-overzicht/wrapper/klassen-overzicht.wrapper.component';
import { KlassenStudentenOverzichtWrapperComponent } from './klassen-studenten-overzicht/klassen-studenten-overzicht-wrapper/klassen-studenten-overzicht-wrapper.component';
import { KlassenStudentenOverzichtComponent } from './klassen-studenten-overzicht/klassen-studenten-overzicht.component';
import { StudentenItemComponent } from './klassen-studenten-overzicht/studenten-item/studenten-item.component';
import { KlassenStudentenToevoegenWrapperComponent } from './klassen-studenten-toevoegen/klassen-studenten-toevoegen-wrapper/klassen-studenten-toevoegen-wrapper.component';
import { KlassenStudentenToevoegenComponent } from './klassen-studenten-toevoegen/klassen-studenten-toevoegen.component';
import { KlassenToevoegenComponent } from './klassen-toevoegen/klassen-toevoegen.component';
import { KlassenToevoegenWrapperComponent } from './klassen-toevoegen/wrapper/klassen-toevoegen.wrapper.component';


@NgModule({
  declarations: [
    KlassenOverzichtComponent,
    KlassenOverzichtWrapperComponent,
    KlassenItemComponent,
    KlassenToevoegenComponent,
    KlassenToevoegenWrapperComponent,
    KlassenStudentenOverzichtComponent,
    KlassenStudentenToevoegenComponent,
    KlassenStudentenOverzichtWrapperComponent,
    KlassenStudentenToevoegenWrapperComponent,
    StudentenItemComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    HttpClientModule,
    PppComponentsModule,
    ScrollingModule,
    AdminKlassenRoutingModule,
    DragDropModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class AdminKlassenModule {
}
