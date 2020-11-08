import { Component, Input } from '@angular/core';

@Component({
  selector: 'modules-item',
  templateUrl: './modules-item.component.html',
  styleUrls: ['./modules-item.component.css']
})
export class ModulesItemComponent {
  @Input() public name: string;
  @Input() public status: boolean;
  @Input() public dateAdded: string;
  @Input() public background: string;

  constructor() { }
}
