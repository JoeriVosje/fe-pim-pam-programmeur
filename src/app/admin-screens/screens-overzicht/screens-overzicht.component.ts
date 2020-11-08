import { Component, Input } from '@angular/core';

import { Screen } from './screen-item/screen-item.model'
@Component({
  selector: 'screens-overzicht',
  templateUrl: './screens-overzicht.component.html',
  styleUrls: ['./screens-overzicht.component.css']
})
export class ScreensOverzichtComponent {

  @Input()
  public screens: Screen[];

  constructor() { }
}
