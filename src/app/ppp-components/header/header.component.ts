import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ppp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  public title: string;
  @Output()
  public logoutClicked = new EventEmitter<void>();

  constructor() { }

  public onClick(): void {
    this.logoutClicked.emit();
  }
}
