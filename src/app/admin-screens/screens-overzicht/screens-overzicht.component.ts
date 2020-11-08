import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

import { Screen } from './screen-item/screen-item.model';
@Component({
  selector: 'screens-overzicht',
  templateUrl: './screens-overzicht.component.html',
  styleUrls: ['./screens-overzicht.component.css']
})
export class ScreensOverzichtComponent {

  @Input()
  public screens: Screen[];

  constructor() { }

  drop(event: CdkDragDrop<Screen[]>): void {
    moveItemInArray(this.screens, event.previousIndex, event.currentIndex);
    this.screens = [...this.screens];
  }
}
