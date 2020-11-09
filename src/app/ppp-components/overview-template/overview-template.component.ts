import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BreadCrumb } from '../header/bread-crumb.model';

@Component({
  selector: 'overview-template',
  templateUrl: './overview-template.component.html',
  styleUrls: ['./overview-template.component.css']
})
export class OverviewTemplateComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public isAdmin: boolean;

  @Input()
  icon: string;

  breadCrumbRoutes: BreadCrumb[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public onNavigation(route: string): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.router.navigate([route.replace(':id', id)]);
    } else {
      this.router.navigate([route]);
    }
  }

  public logout(): void {
    // todo Implement logout
  }

  ngOnInit(): void {
    // todo Implement breadcrump through route
    this.breadCrumbRoutes = [{name: 'Overzicht', route: '/testRoute'}, {name: 'Toevoegen', route: '/ditIsEenTest'}];
  }
}
