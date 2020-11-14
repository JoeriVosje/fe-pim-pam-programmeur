import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlassenOverzichtComponent } from './klassen-overzicht/klassen-overzicht.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { AdminKlassenRoutingModule } from './admin-klassen-routing.module';
import { KlassenOverzichtWrapperComponent } from './klassen-overzicht/wrapper/klassen-overzicht.wrapper.component';
import { KlassenItemComponent } from './klassen-overzicht/klassen-item/klassen-item.component';
import { KlassenToevoegenComponent } from './klassen-toevoegen/klassen-toevoegen.component';
import { KlassenToevoegenWrapperComponent } from './klassen-toevoegen/wrapper/klassen-toevoegen.wrapper.component';


@NgModule({
  declarations: [
    KlassenOverzichtComponent,
    KlassenOverzichtWrapperComponent,
    KlassenItemComponent,
    KlassenToevoegenComponent,
    KlassenToevoegenWrapperComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    HttpClientModule, 
    PppComponentsModule,
    ScrollingModule,
    AdminKlassenRoutingModule,
    DragDropModule,
    
  ]
})
export class AdminKlassenModule { }
