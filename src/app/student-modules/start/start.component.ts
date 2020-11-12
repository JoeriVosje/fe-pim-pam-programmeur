import { Component, EventEmitter, Output } from '@angular/core';

import content from './start.content.json';

@Component({
  selector: 'student-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  @Output() public naarSchermen = new EventEmitter<void>();

  public headerIcon = 'home_outline';

  constructor() { }

  public getText(key: string): string {
    return content[key];
  }

  public startModule(): void {
    this.naarSchermen.emit();
  }
}
