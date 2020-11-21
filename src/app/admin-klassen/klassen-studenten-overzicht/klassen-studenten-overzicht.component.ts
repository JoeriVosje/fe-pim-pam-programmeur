import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../../ppp-components/modal/modal.component';
import { MenuItem } from '../../ppp-components/three-dot-button/menu-item.model';
import { Student } from '../studenten-item.model';

/**
 * Dit is een zogenoemd 'dom' component. Dit component
 * wordt alleen gebruikt voor het tonen van ontvangen data
 * in een ui. Daarnaast stuurt het gebruikers interactie
 * naar het 'slimme' component.
 */
@Component({
  selector: 'app-klassen-studenten-overzicht',
  templateUrl: './klassen-studenten-overzicht.component.html',
  styleUrls: ['./klassen-studenten-overzicht.component.css']
})
export class KlassenStudentenOverzichtComponent implements OnInit {

  @Input()
  public studenten: Student[];

  @Input()
  public loaded: boolean;

  @Output()
  public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();

  @Output()
  public toevoegenClicked: EventEmitter<void> = new EventEmitter();

  @Input()
  klasNaam: string;

  constructor(private readonly modal: MatDialog) {
  }

  public menuItem(menuItem: MenuItem): void {
    const modal = this.modal.open(ModalComponent, {
      width: '368px',
      data: {
        title: 'Weet je het zeker?',
        text: 'Wet je zeker dat je deze student wilt verwijderen?',
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

  getTitle(): string {
    return (this.klasNaam != null ? `${this.klasNaam} - ` : '') + 'Studenten';
  }
}
