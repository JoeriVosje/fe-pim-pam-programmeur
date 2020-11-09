import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { OverviewTemplateComponent } from './overview-template/overview-template.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
    ThreeDotButtonComponent,
    InputComponent
  ],
  exports: [
    OverviewTemplateComponent,
    ButtonComponent,
    ThreeDotButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule
  ]
})
export class PppComponentsModule { }
