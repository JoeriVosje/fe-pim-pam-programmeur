import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.moduleName);
  }

  public getInputValue(value: string): void {
    this.moduleName = value;
  } 

  public update(){
    this.updateModule.next(this.moduleName);
  }

}
