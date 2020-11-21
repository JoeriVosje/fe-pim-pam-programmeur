import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuItem } from '../../ppp-components/three-dot-button/menu-item.model';
import { Screen } from './scherm-item/scherm-item.model';

@Component({
  selector: 'screens-overzicht',
  templateUrl: './schermen-overzicht.component.html',
  styleUrls: ['./schermen-overzicht.component.css']
})
export class SchermenOverzichtComponent {

  @Input()
  public moduleName: string;

  @Input()
  public loaded: string;

  @Output()
  public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();

  @Output()
  public toevoegenClicked: EventEmitter<void> = new EventEmitter();

  @Output()
  public reOrdered: EventEmitter<Screen[]> = new EventEmitter();

  @Input()
  public screens: Screen[];

  constructor() {
  }

  drop(event: CdkDragDrop<Screen[]>): void {
    moveItemInArray(this.screens, event.previousIndex, event.currentIndex);
    this.screens = [...this.screens];
    this.reOrdered.emit(this.screens);
  }

  public menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }

  toevoegen(): void {
      this.toevoegenClicked.emit();
  }

  getTitle(): string {
    return ((this.moduleName === undefined || this.moduleName === null) ? '' : this.moduleName + ' - ') + 'Schermen';
  }
}
