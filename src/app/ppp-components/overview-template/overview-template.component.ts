import { Component, Input } from '@angular/core';

@Component({
  selector: 'overview-template',
  templateUrl: './overview-template.component.html',
  styleUrls: ['./overview-template.component.css']
})
export class OverviewTemplateComponent {
  @Input()
  public title: string;

  constructor() { }

  public logout(): void {
    // Implement logout
  }
}
