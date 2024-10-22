import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../ppp-components/three-dot-button/menu-item.model';
import { Klas } from '../klassen-item.model';

@Component({
  selector: 'klassen-overzicht',
  templateUrl: './klassen-overzicht.component.html',
  styleUrls: ['./klassen-overzicht.component.css']
})
export class KlassenOverzichtComponent implements OnInit {

  @Input()
  public klassen: Klas[];

  @Input()
  public loaded: boolean;

  @Output()
  public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();

  @Output()
  public toevoegenClicked: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  public menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }

  ngOnInit(): void {
  }

  toevoegen(): void {
    this.toevoegenClicked.emit();
  }

}
