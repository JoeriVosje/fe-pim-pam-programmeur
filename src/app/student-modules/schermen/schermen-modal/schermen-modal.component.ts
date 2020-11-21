import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalData } from './schermen-modal.model';


@Component({
  selector: 'app-schermen-modal',
  templateUrl: './schermen-modal.component.html',
  styleUrls: ['./schermen-modal.component.css']
})
export class SchermenModalComponent {

  constructor(
    public dialogRef: MatDialogRef<SchermenModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) {}

  public skip(): void {
    this.dialogRef.close(true);
  }

  // public close(skip: boo): void {
  //   this.dialogRef.close();
  // }
}
