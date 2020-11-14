import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ppp-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit{
  @Input() public size: string;
  @Input() public values: any[];
  @Output() public selectFieldChange: EventEmitter<string> = new EventEmitter();

  public selectField: FormControl = new FormControl('');

  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.selectField.valueChanges.subscribe(() => {
      this.selectFieldChange.emit(this.selectField.value);
    });
  }
}
