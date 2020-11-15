import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PppSnackerService } from '../../../ppp-services/ppp-snacker.service';
import { AdminModulesService } from '../../admin-modules.service';

@Component({
  selector: 'modules-toevoegen-wrapper',
  templateUrl: './modules-toevoegen.wrapper.component.html',
  styleUrls: ['./modules-toevoegen.wrapper.component.css']
})
export class ModulesToevoegenWrapperComponent implements OnInit {
  loading: boolean;

  constructor(private service: AdminModulesService,
              private router: Router,
              private snackBar: PppSnackerService) {
  }

  ngOnInit(): void {
    this.loading = false;
  }

  addModule(moduleName: string): void {
    if (moduleName != null) {
      if (this.loading === false) {
        this.loading = true;
        this.service.saveModule(moduleName).subscribe({
          next: e => console.log(e),
          error: error => {
            console.log(error);
            this.snackBar.showErGingIetsMis();
            this.loading = false;
          },
          complete: () => {
            this.router.navigate(['modules']);
            this.snackBar.showToegevoegd('Module');
            this.loading = false;
          }
        });
      }
    } else {
      this.snackBar.showError('Oeps, naam invullen aub!');
    }
  }

}
