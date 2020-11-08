import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'ppp-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    confirmText: string,
    message: string,
    title: string
  }, private mdDialogRef: MatDialogRef<ModalComponent>) { }
  
  public close(value) {
    this.mdDialogRef.close(value);
  }
  
  public confirm() {
    this.close(true);
  }

  ngOnInit(): void {
  }

}
