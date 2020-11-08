import { Component, Input } from '@angular/core';

@Component({
  selector: 'screen-item',
  templateUrl: './screen-item.component.html',
  styleUrls: ['./screen-item.component.css']
})
export class ScreenItemComponent {

  @Input() public title: string;
  @Input() public theory: string;
  @Input() public question: string;
  @Input() public background: string;

  constructor() {}




}
