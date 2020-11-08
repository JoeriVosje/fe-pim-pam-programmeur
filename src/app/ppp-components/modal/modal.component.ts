import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ppp-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {

  @Input() texts:any

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponentDialog, {
      width: '300px',
      data: this.texts
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }
}

@Component({
  selector: 'ppp-modaldialog',
  templateUrl: './modaldialog.component.html'
})

export class ModalComponentDialog implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
                  confirmText: string,
                  message: string,
                  title: string
              }, public dialogRef: MatDialogRef<ModalComponentDialog>){}

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}