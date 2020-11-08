import { Component, EventEmitter, Input, Output } from '@angular/core';

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
export class ModulesOverzichtComponent {

  @Input()
  public modules: Module[];

  @Output()
  public navToScreensOverviewClicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public navToScreensOverview(): void {
    this.navToScreensOverviewClicked.emit('screens');
  }
}
