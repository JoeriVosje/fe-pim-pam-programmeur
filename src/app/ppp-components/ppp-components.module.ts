import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from '../app-routing.module';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { OverviewTemplateComponent } from './overview-template/overview-template.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { ThreeDotButtonComponent } from './three-dot-button/three-dot-button.component';

/**
 * In plaats van een aparte library is deze module aangemaakt.
 * Hier kunnen de verschillende gedeelde componenten in worden
 * aangemaakt zoals een button, input of het overview template.
 */
@NgModule({
  declarations: [
    HeaderComponent,
    OverviewTemplateComponent,
    SidebarComponent,

    ButtonComponent,
    ModalComponent,
    ThreeDotButtonComponent

  ],
  exports: [
    OverviewTemplateComponent,
    ButtonComponent,
    ThreeDotButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ]
})
export class PppComponentsModule { }
