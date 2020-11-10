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
  @Input() public moduleId: string;
  @Output() public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {name: 'Schermen', data: '/modules/' + this.moduleId + '/screens', isRoute: true},
      {name: 'Bewerken', data: '/modules/' + this.moduleId + '/edit', isRoute: true},
      {name: 'Verwijderen', data: this.moduleId, isRoute: false},
      ];
  }
  constructor() { }
  menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }
}
