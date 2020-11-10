import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminModulesModule } from './admin-modules/admin-modules.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SessiesOverzichtComponent } from './admin-home/sessies-overzicht/sessies-overzicht.component';
import { SessiesItemComponent } from './admin-home/sessies-overzicht/sessies-item/sessies-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    SessiesOverzichtComponent,
    SessiesItemComponent
  ],
  imports: [
    AdminModulesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
