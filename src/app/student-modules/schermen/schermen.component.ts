import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Screen } from '../models/screen.model';

@Component({
  selector: 'student-schermen',
  templateUrl: './schermen.component.html',
  styleUrls: ['./schermen.component.css']
})
export class SchermenComponent {

  @Input() public screen: Screen;
  @Output() public nextScreen = new EventEmitter<void>();
  @Output() public finished = new EventEmitter<void>();

  public title = 'ModuleName';

  constructor() { }

  public onNext(): void {
    this.screen.lastScreen ? this.finished.emit() : this.nextScreen.emit();
  }

  public showButton(): boolean {
    return !this.screen.question;
  }
}
