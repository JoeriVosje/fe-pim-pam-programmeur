import { Component, OnInit, Input } from '@angular/core';
import { Sessie } from './sessies-item/sessies-item.model';

/**
 * Dit is een zogenoemd 'dom' component. Dit component
 * wordt alleen gebruikt voor het tonen van ontvangen data
 * in een ui. Daarnaast stuurt het gebruikers interactie
 * naar het 'slimme' component.
 */
@Component({
  selector: 'sessies-overzicht',
  templateUrl: './sessies-overzicht.component.html',
  styleUrls: ['./sessies-overzicht.component.css']
})
export class SessiesOverzichtComponent implements OnInit {

  @Input()
  public sessies: Sessie[];

  constructor() { }

  ngOnInit(): void {
  }

}
