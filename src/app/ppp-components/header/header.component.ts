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
  public logoutEmitter = new EventEmitter<void>();
  @Output()
  public breadCrumbEmitter = new EventEmitter<string>();
  @Input()
  icon: string;
  @Input()
  breadCrumbRoutes: BreadCrumb[];

  constructor() {
  }

  public logoutClicked(): void {
    this.logoutEmitter.emit();
  }

  public breadCrumbClicked(route: string): void {
    this.breadCrumbEmitter.emit(route);
  }

}
