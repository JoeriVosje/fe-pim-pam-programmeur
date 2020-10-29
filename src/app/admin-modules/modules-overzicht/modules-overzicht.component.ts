import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
