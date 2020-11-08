import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ppp-three-dot-button',
  templateUrl: './three-dot-button.component.html',
  styleUrls: ['./three-dot-button.component.css']
})
export class ThreeDotButtonComponent {

  @Output()
  public clicked = new EventEmitter<void>();

  constructor() {
  }

  public onClick(): void {
    this.clicked.emit();
  }

}
