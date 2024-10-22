import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminModulesService } from 'src/app/admin-modules/admin-modules.service';
import { PppSnackerService } from '../../../ppp-services/ppp-snacker.service';
import { AdminKlassenService } from '../../admin-klassen.service';
import { KlasRequest } from '../../klassen-request.model';
import {map} from 'rxjs/operators';

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
              private snackBar: PppSnackerService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.moduleService.getModules()
      .subscribe({
        next: modules => this.modules = modules.map(e => {
          return {key: e.id, value: e.name};
        }),
        error: error => this.snackBar.showErGingIetsMis(error)
      });
  }

  addKlas(klas: KlasRequest): void {
    if (klas.name != null && klas.major != null && klas.moduleId != null) {
      if (this.loading === false) {
        this.loading = true;
        this.service.saveKlas(klas).subscribe({
          error: error => {
            this.snackBar.showErGingIetsMis(error);
            this.loading = false;
          },
          complete: () => {
            this.router.navigate(['classes']);
            this.snackBar.showToegevoegd('Klas');
            this.loading = false;
          }
        });
      }
    } else {
      this.snackBar.showAlleVeldenInvullen();
    }
  }

}
