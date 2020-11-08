import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PppComponentsModule } from '../ppp-components/ppp-components.module';
import { AdminScreensComponent } from './admin-screens.component';
import { ScreenItemComponent } from './screens-overzicht/screen-item/screen-item.component';
import { ScreensOverzichtComponent } from './screens-overzicht/screens-overzicht.component';


@NgModule({
  declarations: [
    AdminScreensComponent,
    ScreensOverzichtComponent,
    ScreenItemComponent
  ],
  exports: [
    AdminScreensComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PppComponentsModule,
    ScrollingModule
  ]
})
export class AdminScreensModule { }
