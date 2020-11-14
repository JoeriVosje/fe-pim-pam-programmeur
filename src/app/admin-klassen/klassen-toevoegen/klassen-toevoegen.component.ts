import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KlasRequest } from '../klassen-request.model';

@Component({
  selector: 'klassen-toevoegen',
  templateUrl: './klassen-toevoegen.component.html',
  styleUrls: ['./klassen-toevoegen.component.css']
})
export class KlassenToevoegenComponent implements OnInit {
  @Output()
  public addKlas: EventEmitter<KlasRequest> = new EventEmitter();

  public select: any[] = [];
  private klas: KlasRequest;

  constructor() { }

  ngOnInit(): void {
    this.select.push({key: 'a', value: 'm'})
  }

  public getNameValue(value: string): void {
    this.klas.name = value;
  }

  public getMajorValue(value: string): void {
    this.klas.major = value;
  }

  public getSelectValue(value: string): void {
    console.log(value);
  }

  public add(): void {
    this.addKlas.emit(this.klas);
  }
}
