import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminHomeModule } from './admin-home/admin-home.module';
import { AdminModulesModule } from './admin-modules/admin-modules.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHttpInterceptor } from './http-interceptor';
import { StudentModulesModule } from './student-modules/student-modules.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AdminModulesModule,
    AdminHomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    StudentModulesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
