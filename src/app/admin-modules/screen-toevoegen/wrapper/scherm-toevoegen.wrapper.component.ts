import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminScreensService } from '../../admin-screens.service';
import { Screen } from '../../screens-overzicht/screen-item/screen-item.model';

@Component({
  selector: 'scherm-toevoegen-wrapper',
  templateUrl: './scherm-toevoegen.wrapper.component.html',
  styleUrls: ['./scherm-toevoegen.wrapper.component.css']
})
export class SchermToevoegenWrapperComponent implements OnInit {

  constructor(private service: AdminScreensService, private router: Router, private route: ActivatedRoute) {}
  moduleId: string;
  ngOnInit(): void {
    console.log(this.route);
    this.moduleId = this.route.snapshot.paramMap.get('id');
  }

  addScreen(screen: Screen): void{
    this.service.saveScreen(screen).subscribe({
      next: e => console.log(e),
      error: error => console.log(error),
      complete: () => this.router.navigate(['/modules'])
    });
  }

}
