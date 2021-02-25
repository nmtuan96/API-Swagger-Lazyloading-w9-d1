import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( ()=> InputNameComponent),
      multi: true
    }
  ]
})
export class InputNameComponent implements OnInit {

  public name = new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]);
  onChange: (abc: String) => void;
  onTouched: ()=> void;
  disabled: boolean;

  constructor() { }

  writeValue(value : string): void {
    this.name.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled= isDisabled;
  }

  ngOnInit(): void {
  }
  

}
