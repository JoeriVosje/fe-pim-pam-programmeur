import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminModulesModule } from './admin-modules/admin-modules.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PppComponentsModule } from './ppp-components/ppp-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        AdminModulesModule,
        AppRoutingModule,
        BrowserModule,
        PppComponentsModule,
        NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
