import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';

@Component({
  selector: 'ppp-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {

  @Input() texts: any
  @Output() eventClick = new EventEmitter()

  constructor(public dialog: MatDialog) { }

  openDialog(): void {

    const dialogRef = this.dialog.open(ModalComponentDialog, {
      data: this.texts,
      disableClose: true,
      autoFocus: true,
      panelClass: 'ppp-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.eventClick.emit(result)
    });
  }
}

@Component({
  selector: 'ppp-modaldialog',
  templateUrl: './modaldialog.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponentDialog implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    confirmText: string,
    message: string,
    title: string
  }, public dialogRef: MatDialogRef<ModalComponentDialog>) { }

  close(): void {
    this.dialogRef.close('modal gesloten');
  }

  ngOnInit() {
  }
}