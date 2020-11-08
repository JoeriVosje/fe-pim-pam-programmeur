import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminModulesModule } from './admin-modules/admin-modules.module';
import { AdminScreensModule } from './admin-screens/admin-screens.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModulesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AdminScreensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
