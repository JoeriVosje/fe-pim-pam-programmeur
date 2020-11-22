import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ButtonComponent } from './button/button.component';
import { ContentOverviewComponent } from './content-overview/content-overview.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import {ModalModule} from './modal/modal.module';
import { OverviewTemplateComponent } from './overview-template/overview-template.component';
import { PppFormInputComponent } from './ppp-form-input/ppp-form-input.component';
import { SelectComponent } from './select/select.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SkipOverlayComponent} from './skip-overlay/skip-overlay.component';
import { ThreeDotButtonComponent } from './three-dot-button/three-dot-button.component';
import { OverlayService } from './overlay/overlay.service';
import { ErrorOverlayComponent } from './error-overlay/error-overlay.component';
import { SuccesOverlayComponent } from './succes-overlay/succes-overlay.component';
import { SpinnerComponent } from './spinner/spinner.component';

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
    InputComponent,
    ContentOverviewComponent,
    SelectComponent,
    PppFormInputComponent,
    ErrorOverlayComponent,
    SuccesOverlayComponent,
    SkipOverlayComponent,
    SpinnerComponent
  ],
  exports: [
    OverviewTemplateComponent,
    ButtonComponent,
    ThreeDotButtonComponent,
    PppFormInputComponent,
    InputComponent,
    ModalComponent,
    ContentOverviewComponent,
    SelectComponent,
    ErrorOverlayComponent,
    SkipOverlayComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ModalModule,
    OverlayModule
  ],
  providers: [
    OverlayService
  ]
})
export class PppComponentsModule { }
