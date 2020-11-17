import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { KlasRequest } from '../klassen-request.model';

@Component({
  selector: 'klassen-toevoegen',
  templateUrl: './klassen-toevoegen.component.html',
  styleUrls: ['./klassen-toevoegen.component.css']
})
export class KlassenToevoegenComponent implements OnInit {
  @Output()
  public addKlas: EventEmitter<KlasRequest> = new EventEmitter();

  @Input()
  public modules: any[];
  private klas: KlasRequest = {id: null, moduleId: null, major: null, name: null};

  @Input()
  loading: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  public getNameValue(value: string): void {
    this.klas.name = value?.length === 0 ? null : value;
  }

  public getMajorValue(value: string): void {
    this.klas.major = value?.length === 0 ? null : value;
  }

  public getSelectValue(value: string): void {
    this.klas.moduleId = value?.length === 0 ? null : value;
  }

  public add(): void {
    this.addKlas.emit(this.klas);
  }
}
