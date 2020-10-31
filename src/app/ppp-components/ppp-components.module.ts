import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThreePointButtonComponent } from './three-point-button/three-point-button.component';

/**
 * In plaats van een aparte library is deze module aangemaakt.
 * Hier kunnen de verschillende gedeelde componenten in worden
 * aangemaakt zoals een button, input of het overview template.
 */
@NgModule({
  declarations: [ThreePointButtonComponent],
  exports: [
    ThreePointButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PppComponentsModule { }
