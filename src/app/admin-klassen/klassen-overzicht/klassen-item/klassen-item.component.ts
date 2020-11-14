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
    this.menuItems = [
      {name: 'Studenten Toevoegen', data: '/classes/' + this.klas.id + '/students', isRoute: true, extraDataLolFixLater: this.klas.name},
      {name: 'Verwijderen', data: this.klas.id, isRoute: false},
      ];
  }
  constructor() { }
  menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }
}
