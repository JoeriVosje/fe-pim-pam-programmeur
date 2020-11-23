import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Screen } from '../../models/screen.model';

@Component({
  selector: 'schermen-theory',
  templateUrl: './schermen-theory.component.html',
  styleUrls: ['./schermen-theory.component.css']
})
export class SchermenTheoryComponent {

  @Input() public screen: Screen;
  @Output() public saveTheory = new EventEmitter<void>();
  

  constructor() { }

  public showButton(): boolean {
    return !this.screen.question;
  }

  public getNextButtonText(): string {
    return this.screen.lastScreen ? 'Module afsluiten' : 'Volgende';
  }
}
