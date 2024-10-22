import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';
import { Klas } from '../../klassen-item.model';

@Component({
  selector: 'klassen-item',
  templateUrl: './klassen-item.component.html',
  styleUrls: ['./klassen-item.component.css']
})
export class KlassenItemComponent implements OnInit {
  @Input() public klas: Klas;
  @Input() public background: string;
  @Output() public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.initMenuItems();
  }

  private initMenuItems(): void {
    this.menuItems = [
      {name: 'Studenten', routeOrID: '/classes/' + this.klas.id + '/students', isRoute: true, data: this.klas.name},
      {name: 'Verwijderen', routeOrID: this.klas.id, isRoute: false},
    ];
  }

  constructor() {
  }

  menuItem(menuItem: MenuItem): void {
    this.initMenuItems();
    this.menuItemClicked.emit(menuItem);
  }

  navToItem(): void {
    this.initMenuItems();
    this.menuItemClicked.emit(this.menuItems[0]);
  }

}
