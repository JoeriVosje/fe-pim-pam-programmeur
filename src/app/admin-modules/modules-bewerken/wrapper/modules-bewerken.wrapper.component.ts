import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminModulesService } from '../../admin-modules.service';

@Component({
  selector: 'app-modules-bewerken',
  templateUrl: './modules-bewerken.wrapper.component.html',
  styleUrls: ['./modules-bewerken.wrapper.component.css']
})
export class ModulesBewerkenWrapperComponent implements OnInit {

  public id: string;
  public moduleName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private service: AdminModulesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getModule(this.id).subscribe({
      next: e => this.moduleName = e.name,
      error: error => console.log(error)
    });
  }

  updateModule(moduleName: string): void{
    this.service.updateModule(this. id, moduleName).subscribe({
      next: e => console.log(e),
      error: error => console.log(error),
      complete: () => this.router.navigate(['/modules'])
    });
  }

}
