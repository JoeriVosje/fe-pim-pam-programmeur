import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminScreensService } from '../../admin-screens.service';
import { Screen } from '../scherm-item/scherm-item.model';

@Component({
  selector: 'scherm-overzicht-wrapper',
  templateUrl: './scherm-overzicht.wrapper.component.html',
  styleUrls: ['./scherm-overzicht.wrapper.component.css']
})
export class SchermOverzichtWrapperComponent implements OnInit {

  constructor(private service: AdminScreensService, private router: Router, private route: ActivatedRoute) {}
  moduleId: string;

  @Input()
  public moduleName: string;


  ngOnInit(): void {
    console.log(this.route);
    this.moduleId = this.route.snapshot.paramMap.get('id');
  }

  reOrderScreens(screen: Screen[]): void{
    this.service.reOrderScreen(screen).subscribe({
      next: e => console.log(e),
      error: error => console.log(error),
      complete: () => this.router.navigate(['/modules'])
    });
  }

  toevoegen(): void {
    this.router.navigate(['modules/' + this.moduleId + '/screens/create']);
  }

}
