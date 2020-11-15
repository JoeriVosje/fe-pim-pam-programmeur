import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AdminModulesService } from '../../admin-modules.service';

@Component({
  selector: 'modules-toevoegen-wrapper',
  templateUrl: './modules-toevoegen.wrapper.component.html',
  styleUrls: ['./modules-toevoegen.wrapper.component.css']
})
export class ModulesToevoegenWrapperComponent implements OnInit {
  loading: boolean;

  constructor(private service: AdminModulesService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loading = false;
  }

  addModule(moduleName: string): void{
    if (moduleName != null) {
      if (this.loading === false) {
        this.loading = true;
        this.service.saveModule(moduleName).subscribe({
          next: e => console.log(e),
          error: error => {
            console.log(error);
            this.snackBar.open('Er ging iets mis, probeer het later opnieuw!', '🥵', {
              announcementMessage: 'wtf',
              duration: 4000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['snackbar', 'error']
            });
            this.loading = false;
          },
          complete: () => {
            this.router.navigate(['modules']);
            this.snackBar.open('Module toegevoegd!', '🎉', {
              announcementMessage: 'wtf',
              duration: 4000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['snackbar']
            });
            this.loading = false;
          }
        });
      }
    } else {
      this.snackBar.open('Oeps, naam invullen aub!', '✋', {
        announcementMessage: 'wtf',
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snackbar', 'error']
      });
    }
  }

}
