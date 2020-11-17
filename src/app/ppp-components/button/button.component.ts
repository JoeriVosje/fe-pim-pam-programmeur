import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ppp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() public size: string;
  @Input() public type: string;
  @Input() public loginButton: boolean;
  @Output()
  clicked = new EventEmitter<void>();

  constructor() { }

  onClick(): void {
    this.clicked.emit();
  }
}
