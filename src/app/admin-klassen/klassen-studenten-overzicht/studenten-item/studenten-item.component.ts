import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';
import { Student } from '../../studenten-item.model';

@Component({
  selector: 'studenten-item',
  templateUrl: './studenten-item.component.html',
  styleUrls: ['./studenten-item.component.css']
})
export class StudentenItemComponent implements OnInit {
  @Input() public hasVerticalScrollbar: boolean;
  @Input() public student: Student;
  @Input() public background: string;
  @Output() public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {name: 'Verwijderen', routeOrID: this.student.id, isRoute: false},
    ];
  }
  constructor() { }
  menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }
}
