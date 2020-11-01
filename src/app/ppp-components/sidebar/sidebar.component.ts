import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ppp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input()
  public isAdmin: boolean;

  @Output()
  public navigationClicked = new EventEmitter<string>();

  public homeLink = 'toHome';
  public classesLink = 'toClasses';
  public modulesLink = 'toModules';

  constructor() { }

  public onClick(item: string): void {
    this.navigationClicked.emit(item);
  }
}
