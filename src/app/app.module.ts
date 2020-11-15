import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditorModule } from '@tinymce/tinymce-angular';

import { CookieService } from 'ngx-cookie-service';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { AdminModulesModule } from './admin-modules/admin-modules.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHttpInterceptor } from './http-interceptor';
import { LoginModulesModule } from './login-modules/login-modules.module';
import { StudentModulesModule } from './student-modules/student-modules.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LoginModulesModule,
    AdminModulesModule,
    AdminHomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    EditorModule,
    StudentModulesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
