import { Component, Input } from '@angular/core';

@Component({
  selector: 'ppp-content-overview',
  templateUrl: './content-overview.component.html',
  styleUrls: ['./content-overview.component.css']
})
export class ContentOverviewComponent {
  @Input() public title: string;
  @Input() public size: string;
  @Input() public hideBorder: boolean;

  constructor() { }

  public getClass(value: string): boolean {
    return value === this.size;
  }

}
