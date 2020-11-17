import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'ppp-form-input',
  templateUrl: './ppp-form-input.component.html',
  styleUrls: ['./ppp-form-input.component.css']
})
export class PppFormInputComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  value: any = '';

  constructor(
    @Self()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
  }

  public onChange(fn: any): void {
  }
}
