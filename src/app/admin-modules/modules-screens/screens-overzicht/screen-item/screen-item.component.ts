import { Component, Input } from '@angular/core';

import { Screen } from './screen-item.model';

@Component({
  selector: 'screen-item',
  templateUrl: './screen-item.component.html',
  styleUrls: ['./screen-item.component.css']
})
export class ScreenItemComponent {

  @Input()
  public screen: Screen;

  @Input()
  public background: string;

  constructor() {}




}
