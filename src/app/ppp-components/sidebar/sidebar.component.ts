import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ppp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input()
  public isAdmin: boolean;

  @Output()
  public sidenavEmitter = new EventEmitter<string>();

  public homeLink = '';
  public studentHomeLink = 'student';
  public classesLink = 'classes';
  public modulesLink = 'modules';

  constructor(public router: Router) { }

  public onClick(item: string): void {
    this.sidenavEmitter.emit(item);
  }

  public showLink(): boolean {
    return this.isAdmin;
  }
}
