import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { OverviewTemplateComponent } from './overview-template/overview-template.component';
import { SidebarComponent } from './sidebar/sidebar.component';

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
    ButtonComponent
  ],
  exports: [
    OverviewTemplateComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PppComponentsModule { }
