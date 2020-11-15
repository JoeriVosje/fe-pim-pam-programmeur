import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modules-bewerken',
  templateUrl: './modules-bewerken.component.html',
  styleUrls: ['./modules-bewerken.component.css']
})
export class ModulesBewerkenComponent implements OnInit {
  @Input()
  public moduleName: string;

  @Output()
  public updateModule: EventEmitter<string> = new EventEmitter();

  @Input()
  loading: boolean;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.moduleName);
  }

  public getInputValue(value: string): void {
    this.moduleName = value?.length === 0 ? null : value;
  }

  public update(): void{
    this.updateModule.emit(this.moduleName);
  }
}
