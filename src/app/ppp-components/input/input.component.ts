import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ppp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() public size: string;
  @Input() public id: string;
  @Input() public value = '';
  @Input() public lastItem: boolean;
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

  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(fn: any): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
  }

  public onChange(value: any): void {
  }

}
