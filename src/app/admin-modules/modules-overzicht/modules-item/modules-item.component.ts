import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';

@Component({
  selector: 'modules-item',
  templateUrl: './modules-item.component.html',
  styleUrls: ['./modules-item.component.css']
})
export class ModulesItemComponent implements OnInit {
  @Input() public name: string;
  @Input() public status: boolean;
  @Input() public dateAdded: string;
  @Input() public background: string;
  @Output() public menuItemClicked: EventEmitter<string> = new EventEmitter();
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {name: 'Schermen toevoegen', route: 'modules/id/screens', isRed: false},
      {name: 'Bewerken', route: 'modules/edit/', isRed: false},
      {name: 'Verwijderen', route: 'modules/id/delete', isRed: true},
      ];
  }
  constructor() { }
  navItemClicked(route: string): void {
    this.menuItemClicked.emit(route);
  }
}
