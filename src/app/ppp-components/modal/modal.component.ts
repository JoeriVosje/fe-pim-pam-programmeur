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
      width: '400px',
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
  styles: [`
    #modal-button {
      color: #f53c56;
      background-color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 32px;
      text-align: center;
      font-size: 16px;
      margin: 8px;
      width: 110px;
      height: 40px;
      },
      #modal-button:hover {
        cursor: pointer;
        filter: brightness(80%);
      }
    `]
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