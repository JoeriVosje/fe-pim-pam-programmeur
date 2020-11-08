import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { OverviewTemplateComponent } from './overview-template/overview-template.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';

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
    ModalComponent,
  ],
  exports: [
    OverviewTemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PppComponentsModule { }
