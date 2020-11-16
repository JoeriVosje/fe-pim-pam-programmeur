import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminHomeComponent } from './admin-home.component';
import { SessiesItemComponent } from './sessies-overzicht/sessies-item/sessies-item.component';
import { SessiesOverzichtComponent } from './sessies-overzicht/sessies-overzicht.component';
import { WrapperComponent } from './sessies-overzicht/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    SessiesOverzichtComponent,
    SessiesItemComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PppComponentsModule,
    ScrollingModule,
    AdminHomeRoutingModule,
    MatProgressBarModule,
  ],
  exports: [AdminHomeComponent]
})
export class AdminHomeModule { }
