import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Feedback, Screen } from '../models/screen.model';

@Component({
  selector: 'student-schermen',
  templateUrl: './schermen.component.html',
  styleUrls: ['./schermen.component.css']
})
export class SchermenComponent {

  @Input() public screen: Screen;
  @Input() public feedback: Feedback;
  @Output() public sendAnswer = new EventEmitter<string>();
  @Output() public skip = new EventEmitter<void>();
  @Output() public toNext = new EventEmitter<void>();

  constructor() {
  }
}

