import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Student } from '../models/student.model';
import content from './start.content.json';

@Component({
  selector: 'student-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  @Input() public student: Student;
  @Input() public canStartModule: boolean;
  @Output() public naarSchermen = new EventEmitter<void>();

  public headerIcon = 'home_outline';

  constructor() { }

  public getText(key: string): string {
    return content[key];
  }

  public getName(): string {
    return content['content.title'] + `, ${this.student.firstName}`;
  }

  public getPersonalText(): string {
    if (this.canStartModule) {
      let text: string = content['footer.open'];
      text = text.replace('{klas}', this.student.classroom.name);
      text = text.replace('{module}', this.student.classroom.module.name);

      return text;
    } else {
      return content['footer.closed'];
    }
  }

  public startModule(): void {
    this.naarSchermen.emit();
  }
}
