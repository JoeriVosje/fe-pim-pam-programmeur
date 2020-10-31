import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { OverviewTemplateComponent } from './overview-template/overview-template.component';
import { ThreePointButtonComponent } from './three-point-button/three-point-button.component';

/**
 * In plaats van een aparte library is deze module aangemaakt.
 * Hier kunnen de verschillende gedeelde componenten in worden
 * aangemaakt zoals een button, input of het overview template.
 */
@NgModule({
  declarations: [
    HeaderComponent,
    OverviewTemplateComponent,
    ThreePointButtonComponent
  ],
  exports: [
    OverviewTemplateComponent,
    ThreePointButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PppComponentsModule { }
