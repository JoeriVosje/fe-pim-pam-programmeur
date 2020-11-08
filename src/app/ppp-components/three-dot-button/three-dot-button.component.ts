import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuItem } from './menu-item.model';

@Component({
  selector: 'ppp-three-dot-button',
  templateUrl: './three-dot-button.component.html',
  styleUrls: ['./three-dot-button.component.css']
})
export class ThreeDotButtonComponent {

  @Output()
  public menuItemClicked = new EventEmitter<string>();

  @Input()
  private menuItems: MenuItem[];

  constructor() {
  }

  public menuItemNav(route: string): void {
    this.menuItemClicked.emit(route);
  }

}
