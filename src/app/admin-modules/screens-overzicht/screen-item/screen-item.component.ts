import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';
import { Screen } from './screen-item.model';

@Component({
  selector: 'screen-item',
  templateUrl: './screen-item.component.html',
  styleUrls: ['./screen-item.component.css']
})
export class ScreenItemComponent implements OnInit {

  @Input()
  public screen: Screen;

  @Input()
  public background: string;
  @Input() public screenId: string;
  @Output() public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {name: 'Verwijderen', data: this.screenId, isRoute: false},
    ];
  }

  constructor() {
  }

  menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }
}
