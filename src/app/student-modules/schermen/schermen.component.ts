import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Feedback, Progress, Screen } from '../models/screen.model';

@Component({
  selector: 'student-schermen',
  templateUrl: './schermen.component.html',
  styleUrls: ['./schermen.component.css']
})
export class SchermenComponent {

  @Input() public screen: Screen;
  @Input() public feedback: Feedback;
  @Input() public progress: Progress;
  @Output() public sendAnswer = new EventEmitter<string>();
  @Output() public saveTheory = new EventEmitter<void>();
  @Output() public skip = new EventEmitter<void>();
  @Output() public toNext = new EventEmitter<void>();

  constructor() {
  }

  public getProgressBarPercentage(): number {
    return this.progress.current / this.progress.total * 100;
  }

  public getProgress(): string {
    console.log(this.progress);
    return `${this.progress.current + 1}/${this.progress.total}`;
  }
}

