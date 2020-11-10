import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuItem } from './menu-item.model';

@Component({
  selector: 'ppp-three-dot-button',
  templateUrl: './three-dot-button.component.html',
  styleUrls: ['./three-dot-button.component.css']
})
export class ThreeDotButtonComponent {

  @Output()
  public menuItemClicked = new EventEmitter<MenuItem>();

  @Input()
  private menuItems: MenuItem[];

  constructor() {
  }

  public menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }

}
