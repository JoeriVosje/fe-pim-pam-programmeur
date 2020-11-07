import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ppp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()
  buttonColor: string;

  @Output()
  clicked = new EventEmitter<void>();

  constructor() { }

  onClick(): void {
    this.clicked.emit();
  }

  buttonClasses(): string {
    return this.buttonColor;
  }
}
