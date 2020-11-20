import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';
import { Module } from './modules-item.model';

@Component({
  selector: 'modules-item',
  templateUrl: './modules-item.component.html',
  styleUrls: ['./modules-item.component.css']
})
export class ModulesItemComponent implements OnInit {
  @Input() public hasVerticalScrollbar: boolean;
  @Input() public name: string;
  @Input() public status: string;
  @Input() public dateAdded: string;
  @Input() public background: string;
  @Input() public moduleId: string;
  @Output() public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();
  @Output() public openCloseToggle: EventEmitter<Module> = new EventEmitter();
  menuItems: MenuItem[];

  @Input()
  isOpen: boolean;

  ngOnInit(): void {
    this.menuItems = [
      {name: 'Schermen', routeOrID: '/modules/' + this.moduleId + '/screens', isRoute: true, data: this.name},
      {name: 'Bewerken', routeOrID: '/modules/' + this.moduleId + '/edit', isRoute: true},
      {name: 'Verwijderen', routeOrID: this.moduleId, isRoute: false},
    ];
    this.isOpen = this.status === 'open';
  }

  constructor() {
  }

  menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }

  navToItem(): void {
    this.menuItemClicked.emit(this.menuItems[0]);
  }

  openCloseModule(): void {
    const module: Module = {
      status : this.status,
      id: this.moduleId,
      name: this.name,
      creationDate: null
    };
    console.log(module);
    this.openCloseToggle.emit(module);
  }
}
