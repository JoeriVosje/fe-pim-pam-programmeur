import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../ppp-components/three-dot-button/menu-item.model';
import { Module } from './modules-item/modules-item.model';

/**
 * Dit is een zogenoemd 'dom' component. Dit component
 * wordt alleen gebruikt voor het tonen van ontvangen data
 * in een ui. Daarnaast stuurt het gebruikers interactie
 * naar het 'slimme' component.
 */
@Component({
  selector: 'modules-overzicht',
  templateUrl: './modules-overzicht.component.html',
  styleUrls: ['./modules-overzicht.component.css']
})
export class ModulesOverzichtComponent implements OnInit {

  @Input()
  public modules: Module[];

  @Output()
  public navigateClicked: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  public navigate(route: string): void {
    this.navigateClicked.emit(route);
  }

  ngOnInit(): void {
  }
}
