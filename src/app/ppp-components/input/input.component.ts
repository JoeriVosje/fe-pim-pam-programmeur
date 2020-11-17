import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ppp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() public size: string;
  @Input() public id: string;
  @Input() public value = '';
  @Input() public lastItem: boolean;
  @Input() public icon: string;
  @Output() public inputFieldChange: EventEmitter<string> = new EventEmitter();

  @Input() disabled: boolean;
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  @Input() public inputField: FormControl = new FormControl('');

  private subscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.subscription = this.inputField.valueChanges.subscribe(() => {
      this.inputFieldChange.emit(this.inputField.value);
    });
  }
}
