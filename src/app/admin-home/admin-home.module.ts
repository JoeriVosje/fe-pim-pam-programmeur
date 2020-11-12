import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PppComponentsModule } from '../ppp-components/ppp-components.module';

import { AdminHomeComponent } from './admin-home.component';
import { SessiesItemComponent } from './sessies-overzicht/sessies-item/sessies-item.component';
import { SessiesOverzichtComponent } from './sessies-overzicht/sessies-overzicht.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    SessiesOverzichtComponent,
    SessiesItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PppComponentsModule,
    ScrollingModule,
  ],
  exports: [AdminHomeComponent]
})
export class AdminHomeModule { }
