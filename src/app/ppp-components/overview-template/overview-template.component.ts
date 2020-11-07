import { Component, Input } from '@angular/core';

@Component({
  selector: 'overview-template',
  templateUrl: './overview-template.component.html',
  styleUrls: ['./overview-template.component.css']
})
export class OverviewTemplateComponent {

  @Input()
  public title: string;

  @Input()
  public isAdmin: boolean;

  constructor() { }

  public onNavigation(item: string): void {
    // Implement navigation
    console.log(item);
  }

  public logout(): void {
    // Implement logout
  }
}
