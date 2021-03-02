import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown-status',
  templateUrl: './dropdown-status.component.html',
  styleUrls: ['./dropdown-status.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownStatusComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DropdownStatusComponent),
      multi: true
    }
  ]
})
export class DropdownStatusComponent implements OnInit, ControlValueAccessor {

  listStatus = ["available", "pending", "sold"];
  onChange: (data : any) => void;
  onTouched: () => void;
  disable: boolean;
  public status = new FormControl('',[Validators.required]);

  constructor() { }
  

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.status.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange= fn;
  }
  registerOnTouched(fn: any): void {
    this.status.valueChanges.subscribe(fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  handleOnStatusChange(e) {
    const statusSelect = e.target.value;
    this.writeValue(statusSelect);
    this.onChange(statusSelect);
  }
  validate(c: FormControl){
    return this.status.valid ? null : { invalidForm: {valid: false}  }
  }
}
