import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModulesService } from '../../admin-modules.service';

@Component({
  selector: 'modules-toevoegen-wrapper',
  templateUrl: './modules-toevoegen.wrapper.component.html',
  styleUrls: ['./modules-toevoegen.wrapper.component.css']
})
export class ModulesToevoegenWrapperComponent implements OnInit {

  constructor(private service: AdminModulesService, private router: Router) { }

  ngOnInit(): void {
  }

  addModule(moduleName: string){
    this.service.saveModule(moduleName).subscribe({
      next: e => console.log(e),
      error: error => console.log(error),
      complete: () => this.router.navigate(['/modules'])
    })
  } 

}
