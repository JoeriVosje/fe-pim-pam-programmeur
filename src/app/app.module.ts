import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminModulesModule } from './admin-modules/admin-modules.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModulesModule } from './student-modules/student-modules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModulesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    StudentModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
