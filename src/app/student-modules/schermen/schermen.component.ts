import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Question } from '../models/question.model';

@Component({
  selector: 'student-schermen',
  templateUrl: './schermen.component.html',
  styleUrls: ['./schermen.component.css']
})
export class SchermenComponent {

  @Input() public question: Question;
  @Output() public next = new EventEmitter<void>();

  public title = 'ModuleName';

  constructor() { }

  public onNext(): void {
    this.next.emit();
  }
}
