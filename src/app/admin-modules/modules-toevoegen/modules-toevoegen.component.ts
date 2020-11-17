import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modules-toevoegen',
  templateUrl: './modules-toevoegen.component.html',
  styleUrls: ['./modules-toevoegen.component.css']
})
export class ModulesToevoegenComponent implements OnInit {
  @Output()
  public addModule: EventEmitter<string> = new EventEmitter();

  private moduleName: string;

  @Input()
  loading: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  public getInputValue(value: string): void {
    this.moduleName = value === undefined || value?.length === 0 ? null : value;
  }

  public add(): void {
    this.addModule.emit(this.moduleName);
  }
}
