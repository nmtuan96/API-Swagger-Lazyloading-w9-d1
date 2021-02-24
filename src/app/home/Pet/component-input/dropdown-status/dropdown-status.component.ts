import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  private status: 'available' | 'pending' | 'sold';
  @Input('type') type;

  constructor() { }
  isSelect(statusIndex: number): boolean {
    return !this.status ? false : (this.listStatus[statusIndex] === this.status);
  }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.status = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange= fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  handleOnStatusChange(e) {
    const statusId = parseInt(e.target.value);
    const statusSelect = this.listStatus.find(status => status === this.listStatus[statusId]);
    if(statusSelect){
      this.isBooleanCheck = false; 
    }
    this.writeValue(statusSelect);
    this.onChange(statusSelect);
  }

  validate(c: FormControl){
    if(!this.status){
      return null;
    }
    return this.status !== this.type ? null : {
      type: {
        valid: false,
        actual: c.value
      }
    }
  }

  isBooleanCheck = false;
  checkValidationStatus(){
    if(!this.status){
      this.isBooleanCheck = true; 
    }else{
      this.isBooleanCheck = false; 
    }
  }
}
