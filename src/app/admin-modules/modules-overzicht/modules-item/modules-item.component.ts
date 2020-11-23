import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../../../ppp-components/modal/modal.component';
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
  menuItemNames;

  @Input()
  isOpen: boolean;

  @Input()
  isOpenParentMethod: (value: any) => boolean;

  spamFilter = false;

  ngOnInit(): void {
    this.initMenuItems();
  }

  private initMenuItems(): void {
    this.menuItemNames = ['Schermen', 'Bewerken', 'Verwijderen'];
    this.menuItems = [
      {name: this.menuItemNames[0], routeOrID: '/modules/' + this.moduleId + '/screens', isRoute: true, data: this.name},
      {name: this.menuItemNames[1], routeOrID: '/modules/' + this.moduleId + '/edit', isRoute: true},
      {name: this.menuItemNames[2], routeOrID: this.moduleId, isRoute: false},
    ];
  }

  constructor(private readonly modal: MatDialog) {
  }

  menuItem(menuItem: MenuItem): void {
    this.initMenuItems();
    if (menuItem.name === this.menuItemNames[2]) {
      const modal = this.modal.open(ModalComponent, {
        width: '368px',
        data: {
          title: 'Weet je het zeker?',
          text: 'Weet je zeker dat je deze module wilt verwijderen?',
          buttonText1: 'Verwijderen',
          buttonText2: 'Annuleren'
        }
      });

      modal.afterClosed().subscribe(result => {
        if (result?.data) {
          this.menuItemClicked.emit(this.menuItems[2]);
        }
      });
    } else {
      this.menuItemClicked.emit(menuItem.name === this.menuItemNames[0] ? this.menuItems[0] : this.menuItems[1]);
    }
  }

  navToItem(): void {
    this.initMenuItems();
    this.menuItemClicked.emit(this.menuItems[0]);
  }

  openCloseModule(): void {
    if (!this.spamFilter) {
      this.spamFilter = true;
      const module: Module = {
        status: this.status,
        isOpen: this.isOpen,
        id: this.moduleId,
        name: this.name,
        creationDate: null
      };
      this.openCloseToggle.emit(module);
      this.status = this.isOpen ? 'open' : 'closed';
      this.isOpen = this.isOpenParentMethod(module);
      setTimeout((_) => this.spamFilter = false, 1000);
    }
  }
}
