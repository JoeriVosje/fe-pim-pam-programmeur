import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../ppp-components/three-dot-button/menu-item.model';
import { Module } from './modules-item/modules-item.model';

@Component({
  selector: 'modules-overzicht',
  templateUrl: './modules-overzicht.component.html',
  styleUrls: ['./modules-overzicht.component.css']
})
export class ModulesOverzichtComponent implements OnInit {

  @Input()
  public modules: Module[];

  @Input()
  public loaded: boolean;


  @Input()
  public isOpen: (module: Module) => boolean;

  @Output()
  public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();

  @Output()
  public toevoegenClicked: EventEmitter<void> = new EventEmitter();

  @Output()
  public toggleClicked: EventEmitter<Module> = new EventEmitter();

  constructor() {
  }

  public menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }

  ngOnInit(): void {
  }

  toevoegen(): void {
    this.toevoegenClicked.emit();
  }

  toggleModule(module: Module): void {
    this.toggleClicked.emit(module);
  }
}
