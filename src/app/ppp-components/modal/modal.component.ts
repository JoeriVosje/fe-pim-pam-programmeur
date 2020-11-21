import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalData } from './modal.model';

@Component({
  selector: 'ppp-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})

export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) {}

  public skip(skip: boolean): void {
    this.dialogRef.close({data: skip});
  }
}
