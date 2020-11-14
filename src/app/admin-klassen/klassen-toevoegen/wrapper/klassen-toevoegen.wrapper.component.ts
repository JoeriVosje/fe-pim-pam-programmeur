import { Component, OnInit } from '@angular/core';
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

  constructor(private service: AdminKlassenService, private moduleService: AdminModulesService, private router: Router) { }

  ngOnInit(): void {
    this.moduleService.getModules()
      .subscribe({
        next: modules => this.modules = modules.map(e => {
          return {key: e.id, value: e.name};
        }),
        error: error => console.log(error),
        complete: () => console.log('complete')
      });
  }

  addKlas(klas: KlasRequest): void{
    this.service.saveKlas(klas).subscribe({
      next: e => console.log(e),
      error: error => console.log(error),
      complete: () => this.router.navigate(['/classes'])
    });
  }

}
