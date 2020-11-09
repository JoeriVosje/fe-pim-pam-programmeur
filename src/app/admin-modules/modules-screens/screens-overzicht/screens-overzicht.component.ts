import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';
import { Screen } from './screen-item/screen-item.model';

@Component({
  selector: 'screens-overzicht',
  templateUrl: './screens-overzicht.component.html',
  styleUrls: ['./screens-overzicht.component.css']
})
export class ScreensOverzichtComponent {

  @Input()
  public screens: Screen[];

  @Input()
  public moduleName: string;

  @Output()
  public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();

  constructor() {
  }

  drop(event: CdkDragDrop<Screen[]>): void {
    moveItemInArray(this.screens, event.previousIndex, event.currentIndex);
    this.screens = [...this.screens];
  }

  public menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }
}
