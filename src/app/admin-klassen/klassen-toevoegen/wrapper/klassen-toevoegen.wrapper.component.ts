import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AdminModulesService } from 'src/app/admin-modules/admin-modules.service';
import { AdminKlassenService } from '../../admin-klassen.service';
import { KlasRequest } from '../../klassen-request.model';

@Component({
  selector: 'klassen-toevoegen-wrapper',
  templateUrl: './klassen-toevoegen.wrapper.component.html',
  styleUrls: ['./klassen-toevoegen.wrapper.component.css']
})
export class KlassenToevoegenWrapperComponent implements OnInit {

  public modules: any[] = [];
  loading: boolean;

  constructor(private service: AdminKlassenService,
              private moduleService: AdminModulesService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.moduleService.getModules()
      .subscribe({
        next: modules => this.modules = modules.map(e => {
          return {key: e.id, value: e.name};
        }),
        error: error => console.log(error),
        complete: () => console.log('Modules opgehaald in klassen.')
      });
  }

  addKlas(klas: KlasRequest): void {
    if (klas.name != null && klas.major != null && klas.moduleId != null) {
      if (this.loading === false) {
        this.loading = true;
        this.service.saveKlas(klas).subscribe({
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
            this.router.navigate(['classes']);
            this.snackBar.open('Klas toegevoegd!', '🎉', {
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
      this.snackBar.open('Oeps, alle velden invullen aub!', '✋', {
        announcementMessage: 'wtf',
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snackbar', 'error']
      });
    }
  }

}
