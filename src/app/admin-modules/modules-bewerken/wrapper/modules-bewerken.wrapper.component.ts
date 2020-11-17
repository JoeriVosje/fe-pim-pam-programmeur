import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PppSnackerService } from '../../../ppp-services/ppp-snacker.service';
import { AdminModulesService } from '../../admin-modules.service';

@Component({
  selector: 'app-modules-bewerken',
  templateUrl: './modules-bewerken.wrapper.component.html',
  styleUrls: ['./modules-bewerken.wrapper.component.css']
})
export class ModulesBewerkenWrapperComponent implements OnInit {
  loading: boolean;

  public id: string;
  public moduleName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private service: AdminModulesService,
              private router: Router,
              private snackBar: PppSnackerService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getModule(this.id).subscribe({
      next: e => this.moduleName = e.name,
      error: error => this.snackBar.showErGingIetsMis(error)
    });
  }

  updateModule(moduleName: string): void {
    if (moduleName != null) {
      if (this.loading === false) {
        this.loading = true;
        this.service.updateModule(this.id, moduleName).subscribe({
          error: error => {
            this.snackBar.showErGingIetsMis(error);
            this.loading = false;
          },
          complete: () => {
            this.router.navigate(['modules']);
            this.snackBar.showBewerkt('Module');
            this.loading = false;
          }
        });
      }
    } else {
      this.snackBar.showError('Oeps, naam invullen aub!');
    }
  }

}
