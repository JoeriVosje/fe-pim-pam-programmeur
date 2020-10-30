import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'overview-template',
  templateUrl: './overview-template.component.html',
  styleUrls: ['./overview-template.component.css']
})
export class OverviewTemplateComponent {
  @Input()
  public title: string;
  @Output()
  public logoutClicked = new EventEmitter<void>();

  constructor() { }

  public logout(): void {
    this.logoutClicked.emit();
  }
}
