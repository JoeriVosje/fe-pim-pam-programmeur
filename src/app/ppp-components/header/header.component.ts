import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BreadCrumb } from './bread-crumb.model';

@Component({
  selector: 'ppp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  public title: string;
  @Output()
  public logoutClicked = new EventEmitter<void>();
  @Input()
  icon: string;
  @Input()
  breadCrumbRoutes: BreadCrumb[];

  constructor() {
  }

  public logout(): void {
    this.logoutClicked.emit();
  }

}
