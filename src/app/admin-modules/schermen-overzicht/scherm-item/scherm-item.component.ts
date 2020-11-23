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
  public screenInput: Screen;

  @Input()
  public background: string;
  @Output() public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();
  menuItems: MenuItem[];
  @Input() public hasVerticalScrollbar: boolean;

  public question: string;

  ngOnInit(): void {
    this.question = this.screenInput.question;
    this.initMenuItems();
  }

  private initMenuItems(): void {
    this.menuItems = [
      {name: 'Verwijderen', routeOrID: this.screenInput.id, isRoute: false},
    ];
  }

  constructor() {
  }

  menuItem(menuItem: MenuItem): void {
    this.initMenuItems();
    this.menuItemClicked.emit(menuItem);
  }
}
