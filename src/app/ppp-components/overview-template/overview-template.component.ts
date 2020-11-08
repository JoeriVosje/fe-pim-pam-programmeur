import { Component, Input, OnInit } from '@angular/core';

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

  @Input()
  breadCrumbRoutes: BreadCrumb[];

  ngOnInit(): void {
    // Dit kan weg als het via de breadcrumb input komt
    this.breadCrumbRoutes = [{name: 'Overzicht', route: '/testRoute'}, {name: 'Toevoegen', route: '/ditIsEenTest'}];
  }

  constructor() {
  }

  public onNavigation(item: string): void {
    // Implement navigation
    console.log(item);
  }

  public logout(): void {
    // Implement logout
  }
}
