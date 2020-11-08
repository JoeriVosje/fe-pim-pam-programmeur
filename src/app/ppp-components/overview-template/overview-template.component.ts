import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
  }

  public async onNavigation(route: string): Promise<void> {
    await this.router.navigate([route]);
  }

  public logout(): void {
    // todo Implement logout
  }

  ngOnInit(): void {
    // todo Implement breadcrump through route
    this.breadCrumbRoutes = [{name: 'Overzicht', route: '/testRoute'}, {name: 'Toevoegen', route: '/ditIsEenTest'}];
  }
}
