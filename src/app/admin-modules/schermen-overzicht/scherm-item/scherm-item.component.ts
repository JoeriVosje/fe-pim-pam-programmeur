import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';
import { Screen } from './scherm-item.model';

@Component({
  selector: 'screen-item',
  templateUrl: './scherm-item.component.html',
  styleUrls: ['./scherm-item.component.css']
})
export class SchermItemComponent implements OnInit {

  @Input()
  public screen: Screen;

  @Input()
  public background: string;
  @Input() public screenId: string;
  @Output() public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {name: 'Verwijderen', routeOrID: this.screenId, isRoute: false},
    ];
  }

  constructor() {
  }

  menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }
}
