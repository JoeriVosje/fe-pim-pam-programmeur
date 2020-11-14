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
  @Output() public inputFieldChange: EventEmitter<string> = new EventEmitter();

  public inputField: FormControl = new FormControl('');

  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.inputField.valueChanges.subscribe(() => {
      this.inputFieldChange.emit(this.inputField.value);
    });
  }
}
