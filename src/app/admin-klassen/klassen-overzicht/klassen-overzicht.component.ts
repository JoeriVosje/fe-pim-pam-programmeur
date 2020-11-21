import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../ppp-components/three-dot-button/menu-item.model';
import { Klas } from '../klassen-item.model';
import {ModalComponent} from '../../ppp-components/modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

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

  constructor(private readonly modal: MatDialog) {
  }

  public menuItem(menuItem: MenuItem): void {
    const modal = this.modal.open(ModalComponent, {
    width: '368px',
    data: {
      title: 'Weet je het zeker?',
      text: 'Wet je zeker dat je deze klas wilt verwijderen?',
      buttonText1: 'Verwijderen',
      buttonText2: 'Annuleren'
    }
  });

    modal.afterClosed().subscribe(result => {
      if (result.data) {
        this.menuItemClicked.emit(menuItem);
      }
    });
  }

  ngOnInit(): void {
  }

  toevoegen(): void {
    this.toevoegenClicked.emit();
  }

}
