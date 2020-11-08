
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { ConfirmDialogService } from './modal.component.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './modal.component';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        ModalComponent
    ],
    exports: [ModalComponent],
    entryComponents: [ModalComponent],
    providers: [ConfirmDialogService]
  })
  export class ConfirmDialogModule {
  }